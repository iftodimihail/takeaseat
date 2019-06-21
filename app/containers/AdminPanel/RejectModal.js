import React from 'react';
import { Modal, Button, Form, Input, Tooltip, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import axios from '../../axios';

/**
 * Reject Modal
 * @function RejectModal
 * @description Reject Modal component
 */
class RejectModal extends React.Component {
  state = {
    visible: false
  };

  /**
   * Reject message select
   * @function onSelectChange
   * @param value
   */
  onSelectChange = (value) => {
    if (value !== 'other') {
      this.props.form.setFieldsValue({ message: value });
    } else {
      this.props.form.setFieldsValue({ message: null });
    }
  };

  /**
   * Opens the reject modal
   * @function showModal
   */
  showModal = () => this.setState({ visible: true });

  /**
   * Closes the reject modal
   * @function handleCancel
   */
  handleCancel = () => this.setState({ visible: false });

  /**
   * Submits the register form
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, record, onReject } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios.put(`/reservations/change-reservation-status/${record.id}`, { status: 'rejected', ...values })
          .then(onReject(record.id));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, actionLoading } = this.props;
    const { visible } = this.state;

    return (
      <React.Fragment>
        <Tooltip title="Respinge">
          <a onClick={this.showModal} className="reject"><FontAwesomeIcon icon={faTimesCircle} /></a>
        </Tooltip>
        <Modal
          className="edit-modal"
          visible={visible}
          title="Reject memorial"
          onCancel={this.handleCancel}
          destroyOnClose
          footer={[
            <Button key="back" type="default" size="small" disabled={loading || actionLoading} onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" size="small" loading={loading || actionLoading} onClick={this.handleSubmit}>Save</Button>
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            {/*<Form.Item label="Select reason">*/}
              {/*{getFieldDecorator('selectMessage')(*/}
                {/*<Select onChange={this.onSelectChange} placeholder="Please select one of the reasons">*/}
                {/*</Select>*/}
              {/*)}*/}
            {/*</Form.Item>*/}
            <Form.Item label="Mesaj">
              {getFieldDecorator('message')(
                <Input.TextArea autosize={{ minRows: 6 }} autoComplete="off" style={{ height: 203, overflow: 'auto' }} />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Form.create()(RejectModal);

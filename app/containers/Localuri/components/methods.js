export const onSearch = (history) => (value) => value ? history.push(`/localuri?nume=${value}`) : history.push('/localuri?');

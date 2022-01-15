import Cookie from 'js-cookie';
const authorization = () => Cookie.get('evetToken') !== undefined;
export default authorization;

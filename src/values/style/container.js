import device from "../const/devices";

const container = `
max-width: 1852px;
margin: auto;
position: relative;
display:block;
@media (max-width: ${device.desktop}px) {
  max-width: 1852px;
  width:92%;

}
  @media (max-width: ${device.laptopL}px) {
    width: 92%;
  }
  @media (max-width: ${device.tablet}px) {
    width: 95%;
  }
  @media (max-width: ${device.mobileL}px) {
    width: 96%;
  }
`;
export default container;

const productQl = `
_id
title
refId
brand{
  _id
  title

}
    variants{
      _id
      title
      slug
      description
      shortDescription
      thumbnail{
        _id
        path
      }
      price
      salePrice
      secondaryPrice
      secondarySalePrice

    }
gender

categories{
  _id
  title
  slug


}
attributes{
  _id
  title
  slug
  parent {
    _id
    title
    type
  }
}




storage{
    _id
    title
    status
  }

viewCount
unitsSold
status
createdAt
updatedAt
 `;
export default productQl;

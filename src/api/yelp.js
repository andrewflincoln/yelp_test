import axios from 'axios'



export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 8SutK81eX3g9tn9oqzxlb76sgfoHLy840CYSSn8xToBLxIcpzA4UoQA8L25B_VgKByBDd5wcbsxv2_788UiF4FdY_bvkOZq1WoHFoRHm29i3024lwS1oTSwcgfyqX3Yx'
  }

})
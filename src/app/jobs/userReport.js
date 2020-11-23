export default {
  key: 'userReport',
  async handle ({ data }) {
    const { user } = data
    console.log('Test job', user)
  } 
}
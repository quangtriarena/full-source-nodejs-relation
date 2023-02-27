export default function HomeRoute(app) {
  app.get('/', (req, res) => {
    res.send('home page')
  })
}

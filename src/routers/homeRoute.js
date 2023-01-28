export default function HomeRoute(app) {
  app.get('/api/home', (req, res) => {
    res.send('home page api')
  })
}

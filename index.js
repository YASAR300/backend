require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const githubData = {
    "login": "YASAR300",
    "id": 179014663,
    "node_id": "U_kgDOCquMBw",
    "avatar_url": "https://avatars.githubusercontent.com/u/179014663?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/YASAR300",
    "html_url": "https://github.com/YASAR300",
    "followers_url": "https://api.github.com/users/YASAR300/followers",
    "following_url": "https://api.github.com/users/YASAR300/following{/other_user}",
    "gists_url": "https://api.github.com/users/YASAR300/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/YASAR300/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/YASAR300/subscriptions",
    "organizations_url": "https://api.github.com/users/YASAR300/orgs",
    "repos_url": "https://api.github.com/users/YASAR300/repos",
    "events_url": "https://api.github.com/users/YASAR300/events{/privacy}",
    "received_events_url": "https://api.github.com/users/YASAR300/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2024-08-21T13:52:43Z",
    "updated_at": "2024-10-24T05:52:19Z"
  }
app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/x', (req, res) => {
    res.send('applecom')
})
app.get('/login', (req,res) =>{
    res.send('<h1> please join </h1>')
})
app.get('/youtube', (req,res) => {
    res.send('<h2>think on you </h2>')
})
app.get('/github', (req, res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}`)
})
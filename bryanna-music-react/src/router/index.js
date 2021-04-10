import React from 'react'
import { Redirect } from 'react-router'

import JRDiscover from '@/pages/discover'
import JRRecommend from '@/pages/discover/c-pages/recommend'
import JRRanking from '@/pages/discover/c-pages/ranking'
import JRSongs from '@/pages/discover/c-pages/songs'
import JRDjradio from '@/pages/discover/c-pages/djradio'
import JRArtist from '@/pages/discover/c-pages/artist'
import JRAlbum from '@/pages/discover/c-pages/album'
import JRPlayer from '@/pages/player'

import JRMine from '@/pages/mine'
import JRFriend from '@/pages/friend'


const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      <Redirect to="/discover" />
    }
  },
  {
    path: "/discover",
    component: JRDiscover,
    router: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: JRRecommend
      },
      {
        path: "/discover/ranking",
        component: JRRanking
      },
      {
        path: "/discover/songs",
        component: JRSongs
      },
      {
        path: "/discover/djradio",
        component: JRDjradio
      },
      {
        path: "/discover/artist",
        component: JRArtist
      },
      {
        path: "/discover/album",
        component: JRAlbum
      },
      {
        path: "/discover/player",
        component: JRPlayer
      },
    ]
  },
  {
    path: "/mine",
    component: JRMine
  },
  {
    path: "/friend",
    component: JRFriend
  },
]

export default routes;
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
// import DeleteIcon from '@mui/icons-material/Delete'
import { useAppSelector, useAppDispatch } from '../hooks'
//import { decrement, increment } from '../stores/UserStore'

import styled from 'styled-components'
import phaserGame from '../PhaserGame'
import Game from '../scenes/Game'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

export default function Video() {
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const [videos, setVideos] = useState<string[]>([])
  const sessionId = useAppSelector((state) => state.user.sessionId)
  const dispatch = useAppDispatch()

  return (
    <>
      <Wrapper>
        <div>sessionId: {sessionId}</div>

        {/* This is how you write if-else (or conditionally render in react) */}
        {/* {showVideo ? <h1>haha</h1> : null} */}

        {/* This is how you write for-loops (or render multiple elements dynamically in react) */}
        {/* {videos.map((video, i) => (
        <div>
          {video}
          <IconButton
            onClick={() => {
              const clonedVideos = [...videos]
              clonedVideos.splice(i, 1)
              setVideos(clonedVideos)
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))} */}
      </Wrapper>
    </>
  )
}

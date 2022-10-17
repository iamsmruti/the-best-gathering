import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const LoadingButton = ({text, link}) => {
  return (
    <><LoadingButton loading variant="outlined">
          Submit
      </LoadingButton><LoadingButton loading loadingIndicator="Loading…" variant="outlined">
              Fetch data
          </LoadingButton><LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
              Save
          </LoadingButton></>
  )
}

export default LoadingButton


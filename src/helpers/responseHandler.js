const ResponseHandle = {
  success: (res, data) => {
    res.status(200).json({ success: true, data })
  },

  error: (res, error, status) => {
    let message = error.message

    res.status(status | 400).json({ success: false, error: { message } })
  },
}

export default ResponseHandle

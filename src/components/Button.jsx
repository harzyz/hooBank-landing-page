import React from 'react'

function Button({rounded, fs, c, w, bg, p, fw, title}) {
  return (
    <button style={{ width:w, fontSize:fs, color: c, fontWeight: fw, borderRadius: rounded, border:'none', background:bg, padding:p }}>
      {title}
    </button>
  )
}

export default Button

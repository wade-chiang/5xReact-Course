import React from 'react'

const About = async() => {
  const data  = await fetch('https://milkmidi.vercel.app/api/mock').then(res => res.json());
  return (
    <div>
      <h1>About</h1>
      <p>{data.name}</p>
    </div>
  )
}

export default About
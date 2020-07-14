the features of this project are<br/>
-- used [react-router](https://reactrouter.com/web/guides/quick-start) for faster routing <br/>
-- used [react-mouse-particle](https://codesandbox.io/s/react-mouse-particles-l45h1?file=/src/Album.jsx) for amazing mouse <br/>
import MouseParticles from 'react-mouse-particles'

class Example extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      </>
    )
  }
}
```

## Parameter Description
```jsx
<MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
```

key | describe |type | example
----|-----|-----|------
`g` | Whether to add gravity | number | `1`
`num` | The number of particles emitted each time | number | `3`
`radius` | The radius of every particle | number | `10`
`alpha` | The alpha of every particle | number | `.1`
`tha` | The Particle emitter angle | number | `20`
`v` | The Particle emitter Particle velocity | number | `0.5`
`life` | The life of every particle | number | `1.2`
`color` | Particle color  | array or string | `<MouseParticles g={1} color="random" /> // or <MouseParticles g={1} color={["#ff0000", "#ccdfs2"]} />`
`cull` | Eliminate dom's className without triggering animation  | string | `<MouseParticles cull="container,image-wrapper" />`
`level` | Detect levels of culling animation  | number | `6`

---

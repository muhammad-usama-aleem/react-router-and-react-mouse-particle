### Features <br/>
 <br/>
-- used ![react-router](https://reactrouter.com/web/guides/quick-start) for faster routing <br/>
-- used ![react-mouse-particle](https://codesandbox.io/s/react-mouse-particles-l45h1?file=/src/Album.jsx) for amazing mouse particles effects <br/>

<br/>

### OUTPUT
The final out put look like this <br/>
just by clicking the button 
# sign in <br/>
or <br/>
# sign up 
we can navigate from sign in to sign up form without refresing the browser.<br/>

![](1.png) <br/>
<br/><br/>
![](2.png)

### react-router <br/>

by using react router we can change the content on the site without refresing browser <br/>

### react-mouse-particle <br/>
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

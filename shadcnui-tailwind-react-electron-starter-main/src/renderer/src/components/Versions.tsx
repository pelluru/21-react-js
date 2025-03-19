import { useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <li className="electron-version text-foreground/50">Electron v{versions.electron}</li>
      <li className="chrome-version text-foreground/50">Chromium v{versions.chrome}</li>
      <li className="node-version text-foreground/50">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions

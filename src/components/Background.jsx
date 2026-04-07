// Multidirectional Vector Data Streams (Right, Left, Up, Down)
const VECTOR_LINES = [
  // Horizontal Right 
  { dir: 'right', pos: '10%', delay: '0s',    dur: '12s', len: '350px' },
  { dir: 'right', pos: '35%', delay: '-4s',   dur: '18s', len: '250px' },
  { dir: 'right', pos: '65%', delay: '-8s',   dur: '15s', len: '450px' },
  
  // Horizontal Left
  { dir: 'left',  pos: '20%', delay: '-2s',   dur: '14s', len: '300px' },
  { dir: 'left',  pos: '50%', delay: '-10s',  dur: '20s', len: '400px' },
  { dir: 'left',  pos: '80%', delay: '-6s',   dur: '16s', len: '500px' },
  
  // Vertical Up
  { dir: 'up',    pos: '15%', delay: '-3s',   dur: '13s', len: '320px' },
  { dir: 'up',    pos: '45%', delay: '-12s',  dur: '22s', len: '360px' },
  { dir: 'up',    pos: '75%', delay: '-7s',   dur: '17s', len: '480px' },
  
  // Vertical Down
  { dir: 'down',  pos: '30%', delay: '-5s',   dur: '11s', len: '260px' },
  { dir: 'down',  pos: '60%', delay: '-15s',  dur: '19s', len: '420px' },
  { dir: 'down',  pos: '90%', delay: '-1s',   dur: '24s', len: '520px' },
]

const COMMANDS = [
  { text: '[akil@arch ~]$ neofetch',                  x: '5%',   y: '10%',  delay: '0s',    dur: '30s', op: 0.5, dir: 'right' },
  { text: '[akil@arch ~]$ yay -S hyprland',            x: '82%',  y: '15%',  delay: '-5s',   dur: '38s', op: 0.45, dir: 'left'  },
  { text: '[akil@arch ~]$ nvim main.py',              x: '10%',  y: '30%',  delay: '-8s',   dur: '35s', op: 0.4, dir: 'right' },
  { text: '[akil@arch ~]$ git status',                 x: '75%',  y: '45%',  delay: '-12s',  dur: '42s', op: 0.5, dir: 'left'  },
  { text: '[akil@arch ~]$ flutter run',                x: '3%',   y: '70%',  delay: '-10s',  dur: '33s', op: 0.6, dir: 'right' },
  { text: '[akil@arch ~]$ sudo pacman -Syu',           x: '88%',  y: '85%',  delay: '-20s',  dur: '40s', op: 0.5, dir: 'left'  },
]

const Background = () => (
  <>
    {/* ── Layer 0: SHARP ML Graph Grid ── */}
    <svg 
      className="bg-graph-svg" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges' }}
    >
      <defs>
        <pattern id="minor-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="1" />
        </pattern>
        <pattern id="major-grid" width="150" height="150" patternUnits="userSpaceOnUse">
          <rect width="150" height="150" fill="url(#minor-grid)" />
          <path d="M 150 0 L 0 0 0 150" fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#major-grid)" />
    </svg>

    {/* ── Layer 1: Multidirectional Vector Data Streams ── */}
    <div className="bg-vector-streams" aria-hidden="true">
      {VECTOR_LINES.map((line, i) => {
        const isHorizontal = line.dir === 'right' || line.dir === 'left';
        return (
          <div 
            key={i} 
            className={`vector-stream-line vsl-${line.dir}`}
            style={{
              [isHorizontal ? 'top' : 'left']: line.pos,
              [isHorizontal ? 'width' : 'height']: line.len,
              animationDelay: line.delay,
              animationDuration: line.dur,
            }}
          />
        )
      })}
    </div>

    {/* ── Layer 2: Floating Commands ── */}
    <div className="term-float-layer" aria-hidden="true">
      {COMMANDS.map((cmd, i) => {
        const [ps1, ...rest] = cmd.text.split('$ ')
        return (
          <span
            key={i}
            className={`term-float-cmd cmd-glide-${cmd.dir}`}
            style={{
              left:              cmd.x,
              top:               cmd.y,
              animationDelay:    cmd.delay,
              animationDuration: cmd.dur,
              '--peak-op':       cmd.op,
            }}
          >
            <span className="tfc-ps1">{ps1}$</span>
            <span className="tfc-cmd"> {rest.join('$ ')}</span>
          </span>
        )
      })}
    </div>

    <div className="floating-particles" aria-hidden="true">
      {[...Array(5)].map((_, i) => <div key={i} className="particle-dot" />)}
    </div>

    <div className="cursor-glow" id="cursor-glow" aria-hidden="true" />
  </>
)

export default Background

import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá, Mundo!{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        exercitationem quisquam omnis excepturi nam veritatis in quas itaque ab,
        numquam iste veniam adipisci autem sapiente quibusdam at illo
        consequatur velit. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Explicabo ratione cum vitae, voluptates labore aspernatur? Quos
        voluptatum debitis dolorum, provident dolores id illum, aliquid nisi
        aspernatur ut consectetur optio libero.
      </p>
    </>
  );
}

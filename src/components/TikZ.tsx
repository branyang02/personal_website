import { Pane, Spinner, Text } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';

import { runTikZCode } from '../service/api';

type TikZProps = {
  tikzScript: string;
};

const TikZ: React.FC<TikZProps> = ({ tikzScript }) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runTikZ = async () => {
      try {
        const response = await runTikZCode(tikzScript);
        setSvg(response.output);
      } catch (error) {
        setError('Failed to run TikZ code');
      }
    };

    runTikZ();
  }, [tikzScript]);

  return (
    <Pane
      className="tikz-drawing"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      {svg ? (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      ) : error ? (
        <Text color="red">{error}</Text>
      ) : (
        <Spinner />
      )}
    </Pane>
  );
};

export default TikZ;

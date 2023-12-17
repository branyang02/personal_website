import Grid from '@mui/material/Grid';
import React from 'react';

import AICalendarImage from '../assets/ai-calendar.png';
import SmartOHImage from '../assets/smart_oh.png';
import spellingBeeImage from '../assets/spelling_bee.png';
import TetrisGIF from '../assets/tetris.gif';
import MediaCard from '../components/MediaCard';

const Projects: React.FC = () => {
  const projects = [
    {
      image: spellingBeeImage,
      title: 'Spelling Bee',
      description: 'Fun Party Spelling Bee Game with score counter and word list.',
      techStack: ['TypeScript', 'React', 'Flask'],
      button: 'Try Live',
      link: '/projects/spelling-bee',
    },
    {
      image: AICalendarImage,
      title: 'AI Calendar Maps',
      description:
        'An AI Places Recommendation app that recommends based on your calendar.',
      button: 'Try Live',
      link: 'https://ai-calendar.vercel.app/',
      techStack: ['Python', 'JavaScript', 'Django', 'OpenAI', 'Google Cloud'],
    },
    {
      image: SmartOHImage,
      title: 'Smart OH',
      description:
        'AI powered office hour queue system that streamlines the process of office hours.',
      button: 'GitHub',
      link: 'https://github.com/ewei2406/SmartOH',
      techStack: [
        'Python',
        'TypeScript',
        'JavaScript',
        'PyTorch',
        'React',
        'Express',
        'FastAPI',
      ],
    },
    {
      gif: TetrisGIF,
      title: 'Multi-agent Tetris AI',
      description: 'A Multi-agent Tetris AI trained using Reinforcement Learning.',
      button: 'GitHub',
      link: 'https://github.com/branyang02/multiagent_tetris',
      techStack: ['Python', 'PyTorch'],
    },
    // TODO: more perojects
  ];

  return (
    <div>
      <h1>Projects</h1>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MediaCard
              image={project.image}
              title={project.title}
              description={project.description}
              button={project.button}
              link={project.link}
              techStack={project.techStack}
              gif={project.gif}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;

import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  .skill-category {
    margin-top: 15px;

    .category-label {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skillCategories = [
    {
      label: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'GraphQL', 'Kafka'],
    },
    {
      label: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      label: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'MySQL'],
    },
    {
      label: 'Cloud & DevOps',
      skills: ['AWS (EC2, RDS, S3)', 'Docker', 'GitHub Actions', 'Nginx', 'Linux'],
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Yash, a Backend / Full Stack Engineer based in Delhi NCR, India with 2+ years
              of experience building production systems.
            </p>

            <p>
              I specialize in designing scalable backend architectures and building production-grade
              full-stack applications. I've worked across payment integrations (Razorpay, Stripe),
              event-driven systems (Kafka, BullMQ), and cloud infrastructure (AWS EC2, RDS, S3).
              I care about system design, not just pixel-pushing.
            </p>

            <p>
              Currently, I work as a Software Developer at{' '}
              <a href="https://bithookinfo.com">Bit Hook</a>, building scalable SaaS platforms like{' '}
              <a href="https://app.lemonsoft.in">LemonSoft</a> (25+ tenants) and{' '}
              <a href="https://upipe.tech">UPipe</a> ($100K+/month).
            </p>

            <p>Here are the technologies I work with:</p>
          </div>

          {skillCategories.map((category, i) => (
            <div className="skill-category" key={i}>
              <div className="category-label">{category.label}</div>
              <ul className="skills-list">
                {category.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

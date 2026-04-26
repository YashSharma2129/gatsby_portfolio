import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledStatsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  padding: 20px 0;

  .stat-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--light-slate);

    .stat-icon {
      color: var(--green);
      font-size: var(--fz-sm);
    }

    .stat-value {
      color: var(--lightest-slate);
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Yash Sharma.</h2>;
  const three = <h3 className="big-heading">I build production systems that handle real users.</h3>;
  const four = (
    <>
      <p>
        I'm a Backend / Full Stack Engineer with 2+ years of experience building production SaaS systems,
        event-driven architectures, and scalable APIs. Currently working at{' '}
        <a href="https://bithookinfo.com" target="_blank" rel="noreferrer">
          Bit Hook
        </a>
        , building platforms like{' '}
        <a href="https://app.lemonsoft.in" target="_blank" rel="noreferrer">
          LemonSoft
        </a>
        {' '}and{' '}
        <a href="https://upipe.tech" target="_blank" rel="noreferrer">
          UPipe
        </a>
        .
      </p>
    </>
  );
  const five = (
    <StyledStatsBar>
      <div className="stat-item">
        <span className="stat-icon">▹</span>
        <span className="stat-value">2+</span> Years Experience
      </div>
      <div className="stat-item">
        <span className="stat-icon">▹</span>
        <span className="stat-value">4</span> Production Apps
      </div>
      <div className="stat-item">
        <span className="stat-icon">▹</span>
        <span className="stat-value">25+</span> SaaS Tenants
      </div>
      <div className="stat-item">
        <span className="stat-icon">▹</span>
        <span className="stat-value">10K+</span> Users Served
      </div>
    </StyledStatsBar>
  );
  const six = (
    <a
      className="email-link"
      href="/Yash_Sharma_Resume.pdf"
      target="_blank"
      rel="noreferrer">
      View My Resume
    </a>
  );

  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

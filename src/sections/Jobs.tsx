"use client"; 

import React, { useState, useEffect, useRef} from 'react';
import { KEY_CODES } from "@/utils/utility";
import sr from '@/utils/sr';
import  usePrefersReducedMotion  from "@/hooks/usePrefersReducedMotion";
import { srConfig } from '@/assets/common';
import { KeyboardEvent } from 'react';

export const JobsSection = () => {

    // const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
    
        sr.reveal(revealContainer.current, srConfig());
      }, []);
    
      const focusTab = () => {
        if (tabFocus !== null && tabs.current[tabFocus]) {
          tabs.current[tabFocus]?.focus();
          return;
        }
        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
          setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          setTabFocus(tabs.current.length - 1);
        }
      };
    
      // Only re-run the effect if tabFocus changes
      useEffect(() => focusTab(), [tabFocus]);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
          case KEY_CODES.ARROW_UP: {
            e.preventDefault();
            setTabFocus(tabFocus - 1);
            break;
          }
    
          case KEY_CODES.ARROW_DOWN: {
            e.preventDefault();
            setTabFocus(tabFocus + 1);
            break;
          }
    
          default: {
            break;
          }
        }
      };

  return (
    <section id="about" className="py-40 md:py-44 lg:py-60 relative z-0 overflow-hidden about-section">
    <div className="container">
      <h2 className="numbered-heading">Where I've Worked</h2>
        <div className={`
        relative z-[3] w-[max-content] p-0 m-0 list-none
        max-[600px]:flex max-[600px]:overflow-x-auto max-[600px]:w-[calc(100%+100px)]
        max-[600px]:pl-[50px] max-[600px]:-ml-[50px] max-[600px]:mb-[30px]
        max-[480px]:w-[calc(100%+50px)] max-[480px]:pl-[25px] max-[480px]:-ml-[25px]
      `}> 
            <div role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown} className="tab-list">
                <ul className="flex">
                    {/* {
                        jobsData && jobsData.map(({ node }, i) => {
                            const { company } = node.frontmatter;
                            return (
                                <li key={i}>
                                <button
                                    onClick={() => setActiveTabId(i)}
                                    ref={(el) => (tabs.current[i] = el)}
                                    id={`tab-${i}`}
                                    role="tab"
                                    tabIndex={activeTabId === i ? '0' : '-1'}
                                    aria-selected={activeTabId === i}
                                    aria-controls={`panel-${i}`}
                                    className={`tab-button ${
                                    activeTabId === i ? 'active' : ''
                                    }`}
                                >
                                    <span>{company}</span>
                                </button>
                                </li>
                            );
                        })
                    } */}
                </ul>
            <div
            className="tab-highlight"
            />
        </div>
        </div>
    </div>
  </section>
  )
}
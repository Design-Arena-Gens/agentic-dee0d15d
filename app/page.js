'use client';

import { useState } from 'react';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);

  const reelScript = [
    {
      timestamp: "0:00-0:02",
      scene: "Hook - Opening Shot",
      visual: "Close-up of person's frustrated face staring at laptop",
      voiceover: "\"I was stuck in a dead-end job for 3 years...\"",
      text_overlay: "STUCK IN A DEAD-END JOB? 😞",
      emotion: "Relatability & Frustration",
      notes: "Natural lighting, authentic UGC feel"
    },
    {
      timestamp: "0:02-0:05",
      scene: "Problem Amplification",
      visual: "Quick cuts: bills piling up, scrolling job sites late at night",
      voiceover: "\"Every month was the same - bills coming in, no growth, no future...\"",
      text_overlay: "Sound familiar? 📉",
      emotion: "Empathy & Aspiration",
      notes: "Dim lighting to show struggle, phone screen glow"
    },
    {
      timestamp: "0:05-0:08",
      scene: "Discovery Moment",
      visual: "Person discovers CAD institute ad/website on phone, eyes light up",
      voiceover: "\"Then I found out about CAD design training...\"",
      text_overlay: "Everything changed when... 💡",
      emotion: "Hope & Curiosity",
      notes: "Lighting brightens, face shows interest"
    },
    {
      timestamp: "0:08-0:12",
      scene: "Transformation Montage",
      visual: "Quick clips: attending classes, working on CAD software, projects on screen",
      voiceover: "\"6 months later, I'm designing buildings, products, making 3x my old salary!\"",
      text_overlay: "6 MONTHS = NEW CAREER 🚀",
      emotion: "Excitement & Achievement",
      notes: "Upbeat energy, show software interface, real projects"
    },
    {
      timestamp: "0:12-0:15",
      scene: "Social Proof",
      visual: "Person at new workspace, professional environment, colleagues around",
      voiceover: "\"Now I work with top companies, and I actually love Mondays!\"",
      text_overlay: "₹8 LPA starting salary 💰",
      emotion: "Pride & Aspiration",
      notes: "Professional setting, confident body language"
    },
    {
      timestamp: "0:15-0:18",
      scene: "Entertainment Element",
      visual: "Fun transition: Person dramatically closes old laptop, opens new one with CAD software",
      voiceover: "\"From Excel sheets to 3D masterpieces!\"",
      text_overlay: "GLOW UP 🔥",
      emotion: "Entertainment & Humor",
      notes: "Playful edit, trending sound/music"
    },
    {
      timestamp: "0:18-0:22",
      scene: "Value Proposition",
      visual: "Show certificate, portfolio of work, mentor interaction",
      voiceover: "\"Industry-expert trainers, hands-on projects, 100% placement support...\"",
      text_overlay: "✓ Industry Experts\n✓ Live Projects\n✓ Placement Help",
      emotion: "Trust & Value",
      notes: "Professional but authentic, show real credentials"
    },
    {
      timestamp: "0:22-0:25",
      scene: "Urgency Hook",
      visual: "Person pointing at camera, energetic expression",
      voiceover: "\"Limited seats for next batch! Don't wait 3 years like I did!\"",
      text_overlay: "BATCH STARTING SOON! ⏰",
      emotion: "Urgency & FOMO",
      notes: "Direct to camera, passionate delivery"
    },
    {
      timestamp: "0:25-0:28",
      scene: "Call to Action",
      visual: "Institute logo/website/contact details, person smiling confidently",
      voiceover: "\"Click the link below. Your future self will thank you!\"",
      text_overlay: "👇 LINK IN BIO\nFREE Demo Class",
      emotion: "Inspiration & Action",
      notes: "Clear CTA, engaging smile, professional but approachable"
    },
    {
      timestamp: "0:28-0:30",
      scene: "Closing Hook",
      visual: "Quick before/after split screen: old workspace vs new CAD workspace",
      voiceover: "\"This could be you in 6 months!\"",
      text_overlay: "YOUR TURN! 🎯",
      emotion: "Aspiration & Entertainment",
      notes: "Powerful visual contrast, leave lasting impression"
    }
  ];

  const keyElements = {
    emotions: ["Relatability", "Hope", "Achievement"],
    values: ["Career Growth", "Financial Freedom", "Skill Development"],
    entertainment: ["Dramatic Transitions", "Before/After Reveal", "Trending Format"]
  };

  const scriptNotes = {
    tone: "Authentic, Conversational, Energetic",
    format: "UGC style (user-generated content)",
    duration: "30 seconds",
    platform: "Instagram Reels / YouTube Shorts / TikTok",
    music: "Upbeat trending sound (starts subtle, builds energy)",
    captions: "Bold, easy-to-read text with emojis",
    hashtags: "#CADTraining #CareerChange #SkillDevelopment #3DDesign #EngineeringCareer #UGC"
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px 20px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🎬 UGC Reel Script
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'normal',
            opacity: 0.95
          }}>
            CAD Training Institute Advertisement
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginTop: '20px',
            opacity: 0.9
          }}>
            30-Second High-Converting Reel with Hook + Emotion + Entertainment
          </p>
        </header>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          color: '#333',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            color: '#667eea',
            marginBottom: '20px',
            fontSize: '1.8rem',
            borderBottom: '3px solid #667eea',
            paddingBottom: '10px'
          }}>
            📋 Complete Shot-by-Shot Script
          </h3>

          <div style={{
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {reelScript.map((scene, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                style={{
                  padding: '10px 20px',
                  background: currentScene === index ? '#667eea' : '#f0f0f0',
                  color: currentScene === index ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  boxShadow: currentScene === index ? '0 4px 12px rgba(102,126,234,0.4)' : 'none'
                }}
              >
                Scene {index + 1}
              </button>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
            padding: '30px',
            borderRadius: '15px',
            border: '2px solid #667eea'
          }}>
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>⏱️ Timestamp:</strong>
                <span style={{ marginLeft: '10px', fontSize: '1.2rem', fontWeight: '600' }}>
                  {reelScript[currentScene].timestamp}
                </span>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>🎬 Scene:</strong>
                <span style={{ marginLeft: '10px', fontSize: '1.2rem', fontWeight: '600' }}>
                  {reelScript[currentScene].scene}
                </span>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>
                  👁️ Visual:
                </strong>
                <p style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  margin: '0',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {reelScript[currentScene].visual}
                </p>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>
                  🎤 Voiceover:
                </strong>
                <p style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  margin: '0',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  {reelScript[currentScene].voiceover}
                </p>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>
                  💬 Text Overlay:
                </strong>
                <p style={{
                  background: '#764ba2',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  margin: '0',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  whiteSpace: 'pre-line'
                }}>
                  {reelScript[currentScene].text_overlay}
                </p>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>🎭 Emotion/Value:</strong>
                <span style={{
                  marginLeft: '10px',
                  background: '#764ba2',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {reelScript[currentScene].emotion}
                </span>
              </div>

              <div>
                <strong style={{ color: '#667eea', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>
                  📝 Production Notes:
                </strong>
                <p style={{
                  background: '#fff3cd',
                  color: '#856404',
                  padding: '15px',
                  borderRadius: '10px',
                  margin: '0',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {reelScript[currentScene].notes}
                </p>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <button
              onClick={() => setCurrentScene(Math.max(0, currentScene - 1))}
              disabled={currentScene === 0}
              style={{
                padding: '15px 30px',
                background: currentScene === 0 ? '#ccc' : '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: currentScene === 0 ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                flex: 1
              }}
            >
              ⬅️ Previous Scene
            </button>
            <button
              onClick={() => setCurrentScene(Math.min(reelScript.length - 1, currentScene + 1))}
              disabled={currentScene === reelScript.length - 1}
              style={{
                padding: '15px 30px',
                background: currentScene === reelScript.length - 1 ? '#ccc' : '#764ba2',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: currentScene === reelScript.length - 1 ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                flex: 1
              }}
            >
              Next Scene ➡️
            </button>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            color: '#333',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.4rem' }}>
              🎭 Emotions Used
            </h3>
            {keyElements.emotions.map((emotion, idx) => (
              <div key={idx} style={{
                background: '#f8f9ff',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '10px',
                borderLeft: '4px solid #667eea',
                fontSize: '1rem'
              }}>
                {emotion}
              </div>
            ))}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            color: '#333',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ color: '#764ba2', marginBottom: '15px', fontSize: '1.4rem' }}>
              💎 Values Highlighted
            </h3>
            {keyElements.values.map((value, idx) => (
              <div key={idx} style={{
                background: '#f8f5ff',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '10px',
                borderLeft: '4px solid #764ba2',
                fontSize: '1rem'
              }}>
                {value}
              </div>
            ))}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            color: '#333',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '15px', fontSize: '1.4rem' }}>
              🎪 Entertainment Elements
            </h3>
            {keyElements.entertainment.map((element, idx) => (
              <div key={idx} style={{
                background: '#fffbeb',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '10px',
                borderLeft: '4px solid #f59e0b',
                fontSize: '1rem'
              }}>
                {element}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          color: '#333',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            color: '#667eea',
            marginBottom: '20px',
            fontSize: '1.8rem',
            borderBottom: '3px solid #667eea',
            paddingBottom: '10px'
          }}>
            🎯 Production Guidelines
          </h3>

          <div style={{
            display: 'grid',
            gap: '15px'
          }}>
            <div style={{
              background: '#f8f9ff',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #667eea'
            }}>
              <strong style={{ color: '#667eea', fontSize: '1.1rem' }}>Tone:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.tone}</span>
            </div>

            <div style={{
              background: '#f8f5ff',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #764ba2'
            }}>
              <strong style={{ color: '#764ba2', fontSize: '1.1rem' }}>Format:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.format}</span>
            </div>

            <div style={{
              background: '#fffbeb',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #f59e0b'
            }}>
              <strong style={{ color: '#f59e0b', fontSize: '1.1rem' }}>Duration:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.duration}</span>
            </div>

            <div style={{
              background: '#f0fdf4',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #10b981'
            }}>
              <strong style={{ color: '#10b981', fontSize: '1.1rem' }}>Platform:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.platform}</span>
            </div>

            <div style={{
              background: '#fef2f2',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #ef4444'
            }}>
              <strong style={{ color: '#ef4444', fontSize: '1.1rem' }}>Music:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.music}</span>
            </div>

            <div style={{
              background: '#ecfeff',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '5px solid #06b6d4'
            }}>
              <strong style={{ color: '#06b6d4', fontSize: '1.1rem' }}>Captions Style:</strong>
              <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{scriptNotes.captions}</span>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #667eea15, #764ba215)',
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid #667eea'
            }}>
              <strong style={{ color: '#667eea', fontSize: '1.1rem', display: 'block', marginBottom: '10px' }}>
                Recommended Hashtags:
              </strong>
              <span style={{ fontSize: '1rem', color: '#555' }}>{scriptNotes.hashtags}</span>
            </div>
          </div>
        </div>

        <footer style={{
          textAlign: 'center',
          padding: '30px',
          marginTop: '40px',
          opacity: 0.9
        }}>
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            🎬 Ready to shoot your viral CAD training reel!
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            This script combines proven hooks with emotional storytelling and entertainment value
          </p>
        </footer>
      </div>
    </div>
  );
}

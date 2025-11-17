import React, { useState, useEffect } from 'react';
import Login from './components/Login';

// Firebase configuration - USING EXACT SAME CONFIG AS WORKING PROJECT
const firebaseConfig = {
  apiKey: "AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",
  authDomain: "digitalliberia-notification.firebaseapp.com",
  projectId: "digitalliberia-notification",
  storageBucket: "digitalliberia-notification.appspot.com",
  messagingSenderId: "537791418352",
  appId: "1:537791418352:web:378b48439b2c9bed6dd735"
};

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
    console.log('Education system login successful:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('educationUser');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <span>Digital Liberia Education</span>
          </div>
          
          {/* Liberia Flag and Login Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Liberia Flag */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ 
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>
                🇱🇷
              </div>
              <span style={{ 
                color: 'var(--white)', 
                fontSize: '0.9rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Republic of Liberia
              </span>
            </div>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ 
                  color: 'var(--white)', 
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Welcome, {user.profile?.firstName} {user.profile?.lastName}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-glass"
                  style={{ 
                    padding: '0.7rem 1.2rem', 
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="btn btn-education"
                style={{ 
                  padding: '0.7rem 1.5rem', 
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(0, 212, 170, 0.4)'
                }}
              >
                🎓 Education Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {!user ? (
          <div className="hero-section">
            <div className="hero-text">
              <h1>
                Advanced Education
                <br />
                <span style={{ 
                  background: 'var(--education-gradient)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text' 
                }}>
                  Management System
                </span>
              </h1>
              <p>
                Revolutionizing education in Liberia with cutting-edge technology, 
                secure student records, and real-time learning services.
              </p>

              {/* Enhanced Education Features Grid with Floating Animations */}
              <div className="education-features-grid">
                {/* Student Records Card */}
                <div className="education-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15), rgba(17, 138, 178, 0.1))',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="education-feature-icon" style={{
                    background: 'linear-gradient(135deg, #00d4aa, #118ab2)',
                    boxShadow: '0 8px 25px rgba(0, 212, 170, 0.4)'
                  }}>📚</div>
                  <div className="education-feature-content">
                    <h4>Student Records</h4>
                    <p>Secure digital academic records with instant access for authorized education professionals</p>
                  </div>
                </div>

                {/* Learning Management Card */}
                <div className="education-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(114, 9, 183, 0.15), rgba(58, 134, 255, 0.1))',
                  border: '1px solid rgba(114, 9, 183, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="education-feature-icon" style={{
                    background: 'linear-gradient(135deg, #7209b7, #3a86ff)',
                    boxShadow: '0 8px 25px rgba(114, 9, 183, 0.4)'
                  }}>🎯</div>
                  <div className="education-feature-content">
                    <h4>Learning Management</h4>
                    <p>Real-time course tracking and academic progress management system</p>
                  </div>
                </div>

                {/* E-Learning Card */}
                <div className="education-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.15), rgba(255, 209, 102, 0.1))',
                  border: '1px solid rgba(239, 71, 111, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="education-feature-icon" style={{
                    background: 'linear-gradient(135deg, #ef476f, #ffd166)',
                    boxShadow: '0 8px 25px rgba(239, 71, 111, 0.4)'
                  }}>💻</div>
                  <div className="education-feature-content">
                    <h4>E-Learning</h4>
                    <p>Virtual classrooms and remote learning capabilities</p>
                  </div>
                </div>

                {/* Academic Support Card */}
                <div className="education-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(255, 77, 77, 0.15), rgba(255, 122, 0, 0.1))',
                  border: '1px solid rgba(255, 77, 77, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.6s'
                }}>
                  <div className="education-feature-icon" style={{
                    background: 'linear-gradient(135deg, #ff4d4d, #ff7a00)',
                    boxShadow: '0 8px 25px rgba(255, 77, 77, 0.4)'
                  }}>👨‍🏫</div>
                  <div className="education-feature-content">
                    <h4>Academic Support</h4>
                    <p>Tutoring services and educational resource coordination</p>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="btn btn-education"
                >
                  🎓 Access Education Portal
                </button>
                <button className="btn btn-academic">
                  📚 Academic Resources
                </button>
                <button className="btn btn-learning">
                  💻 E-Learning Services
                </button>
              </div>
            </div>

            <div className="hero-visual" style={{ position: 'relative' }}>
              <div 
                className="floating"
                style={{
                  background: 'var(--card-bg)',
                  padding: '3rem',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle background pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, 
                    rgba(0, 212, 170, 0.08) 0%, 
                    rgba(17, 138, 178, 0.08) 50%, 
                    rgba(114, 9, 183, 0.08) 100%)`,
                  zIndex: 0
                }}></div>
                
                {/* Education Icon */}
                <div 
                  style={{
                    fontSize: '6rem',
                    marginBottom: '2rem',
                    color: '#00d4aa',
                    filter: 'drop-shadow(0 4px 12px rgba(0, 212, 170, 0.4))',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                >
                  🎓
                </div>
                <h3 style={{ 
                  color: '#00d4aa', 
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 2px 4px rgba(0, 212, 170, 0.2)'
                }}>
                  Your Education, Our Priority
                </h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Secure, efficient, and modern education solutions for all Liberians
                </p>
                
                {/* Liberia Flag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 212, 170, 0.1)',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 1
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🇱🇷</span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#00d4aa',
                    fontWeight: '600'
                  }}>
                    LIBERIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px',
            textAlign: 'center'
          }}>
            <div 
              style={{
                background: 'var(--card-bg)',
                padding: '4rem',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                marginBottom: '3rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, 
                  rgba(0, 212, 170, 0.03) 0%, 
                  rgba(17, 138, 178, 0.03) 50%, 
                  rgba(114, 9, 183, 0.03) 100%)`,
                zIndex: 0
              }}></div>
              
              <div 
                style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  background: 'var(--education-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                🎉
              </div>
              <h1 style={{ 
                color: 'var(--text-dark)', 
                marginBottom: '1rem',
                fontSize: '2.5rem',
                fontWeight: '800',
                position: 'relative',
                zIndex: 1
              }}>
                Welcome to Education Portal
              </h1>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                Access advanced education tools and student management systems
              </p>
              
              {/* Liberia Flag Welcome Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.3)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ fontSize: '1.5rem' }}>🇱🇷</span>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--success-color)',
                  fontWeight: '600'
                }}>
                  Ministry of Education - Republic of Liberia
                </span>
              </div>
              
              {/* Enhanced Education Action Grid for Logged-in Users */}
              <div className="education-action-grid">
                {/* Student Records Card */}
                <div className="education-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15), rgba(17, 138, 178, 0.1))',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="education-card-icon" style={{
                    background: 'linear-gradient(135deg, #00d4aa, #118ab2)',
                    boxShadow: '0 15px 30px rgba(0, 212, 170, 0.4)'
                  }}>📋</div>
                  <h3 className="education-card-title">Student Records</h3>
                  <p className="education-card-description">
                    Access and manage comprehensive student academic records and performance history
                  </p>
                  <button className="btn btn-education">
                    View Records
                  </button>
                </div>
                
                {/* Academic Services Card */}
                <div className="education-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(114, 9, 183, 0.15), rgba(58, 134, 255, 0.1))',
                  border: '1px solid rgba(114, 9, 183, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="education-card-icon" style={{
                    background: 'linear-gradient(135deg, #7209b7, #3a86ff)',
                    boxShadow: '0 15px 30px rgba(114, 9, 183, 0.4)'
                  }}>📊</div>
                  <h3 className="education-card-title">Academic Services</h3>
                  <p className="education-card-description">
                    Schedule classes, manage courses, and coordinate educational services
                  </p>
                  <button className="btn btn-academic">
                    Manage Services
                  </button>
                </div>
                
                {/* Education Analytics Card */}
                <div className="education-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(46, 191, 145, 0.15), rgba(131, 96, 195, 0.1))',
                  border: '1px solid rgba(46, 191, 145, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="education-card-icon" style={{
                    background: 'linear-gradient(135deg, #2ebf91, #8360c3)',
                    boxShadow: '0 15px 30px rgba(46, 191, 145, 0.4)'
                  }}>📈</div>
                  <h3 className="education-card-title">Education Analytics</h3>
                  <p className="education-card-description">
                    Advanced analytics and reporting for educational insights and trends
                  </p>
                  <button className="btn btn-education">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <Login 
          onLoginSuccess={handleLoginSuccess}
          onBack={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;

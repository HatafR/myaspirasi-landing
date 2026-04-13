'use client';

import { useState } from 'react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Manajemen tiket yang efisien",
      description: "Kelola semua tiket dukungan pelanggan Anda di satu platform terintegrasi dengan sistem pelacakan yang cepat dan akurat"
    },
    {
      title: "Otomasi alur kerja",
      description: "Tingkatkan produktivitas tim dengan routing otomatis, eskalasi cerdas, dan notifikasi real-time untuk setiap perubahan status"
    },
    {
      title: "Analitik mendalam",
      description: "Dapatkan wawasan tentang performa tim dan kepuasan pelanggan dengan dashboard analitik yang komprehensif dan laporan yang dapat disesuaikan"
    }
  ];

  const team = {
    projectManager: [
      {
        name: "Maretha Puruhita",
        role: "Project Manager",
        photo: "/rere.jpg"
      }
    ],
    systemDesign: [
      {
        name: "Muthie Armalia",
        role: "System Design",
        photo: "/muthie.jpg"
      },
      {
        name: "Shafa",
        role: "System Design",
        photo: "/shafa.jpg"
      },
      {
        name: "Yuwan Adyatma",
        role: "QA Tester",
        photo: "/yuwan.jpg"
      }
    ],
    developers: [
      {
        name: "Parikesit",
        role: "Fullstack Developer",
        photo: "/parikesit.jpg"
      },
      {
        name: "Fatah Rizqi",
        role: "Fullstack Developer",
        photo: "/fatah.jpg"
      }
    ]
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(0, 0, 0, 0.08)',
        zIndex: 100,
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '16px'
            }}>M</div>
            <span style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a1a' }}>MyAspirasi</span>
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Fitur</a>
            <a href="#team" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Tim</a>
            <a href="#contact" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Kontak</a>
            <button style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>Mulai sekarang</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        padding: '80px 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-block',
            background: '#eff6ff',
            color: '#2563eb',
            padding: '8px 16px',
            borderRadius: '24px',
            fontSize: '13px',
            fontWeight: '500',
            marginBottom: '24px'
          }}>
            Dipercaya oleh Balai Pelatihan Komdigi
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#1a1a1a',
            margin: '0 0 24px',
            letterSpacing: '-0.02em'
          }}>
            Sistem Ticketing<br />yang mengutamakan <span style={{ color: '#2563eb' }}>efisiensi</span>
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Platform manajemen tiket dukungan pelanggan yang dirancang untuk meningkatkan produktivitas tim dan kepuasan pelanggan Anda
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
            <button style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>Coba gratis</button>
            <button style={{
              background: 'white',
              color: '#2563eb',
              border: '1px solid #e5e7eb',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>Jadwalkan demo</button>
          </div>

          {/* Trusted By */}
          <div style={{
            background: 'white',
            border: '0.5px solid #e5e7eb',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '700px',
            margin: '0 auto',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}>
            <p style={{
              fontSize: '13px',
              color: '#999',
              marginBottom: '20px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Dipercaya oleh
            </p>

            {/* LOGO DIGANTI DI SINI */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/bpt-komdigi.png"
                alt="BPT Komdigi"
                style={{
                  maxHeight: '60px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            <p style={{ fontSize: '14px', color: '#666', marginTop: '12px' }}>
              Balai Pelatihan Teknologi Komunikasi dan Informatika
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>Fitur unggulan</h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              Dilengkapi dengan berbagai fitur untuk memudahkan pengelolaan tiket dukungan pelanggan Anda
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                style={{
                  background: activeFeature === index ? '#f8fafc' : 'white',
                  border: activeFeature === index ? '0.5px solid #2563eb' : '0.5px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#eff6ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: '#2563eb',
                    borderRadius: '4px'
                  }}></div>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '12px'
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.7'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { number: '500+', label: 'Tiket terproses per hari' },
              { number: '98%', label: 'Kepuasan pelanggan' },
              { number: '2 jam', label: 'Waktu respons rata-rata' },
              { number: '24/7', label: 'Dukungan tersedia' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                border: '0.5px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px 24px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#2563eb',
                  marginBottom: '8px'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '14px',
                  color: '#666'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{ padding: '80px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>Tim pengembang</h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.7' }}>
              Dibangun oleh tim profesional yang berpengalaman
            </p>
          </div>

          {/* Project Manager */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #2563eb'
            }}>Project Manager</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {team.projectManager.map((member, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '0.5px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center',
                  width: '240px'
                }}>
                  <img
  src={member.photo}
  alt={member.name}
  style={{
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 16px'
  }}
/>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>{member.name}</h4>
                  <p style={{
                    fontSize: '13px',
                    color: '#666'
                  }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Design */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #2563eb'
            }}>System Design</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {team.systemDesign.map((member, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '0.5px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <img
  src={member.photo}
  alt={member.name}
  style={{
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 16px'
  }}
/>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>{member.name}</h4>
                  <p style={{
                    fontSize: '13px',
                    color: '#666'
                  }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #2563eb'
            }}>Developers</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '600px', margin: '0 auto' }}>
              {team.developers.map((member, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '0.5px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <img
  src={member.photo}
  alt={member.name}
  style={{
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 16px'
  }}
/>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>{member.name}</h4>
                  <p style={{
                    fontSize: '13px',
                    color: '#666'
                  }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 2rem',
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>Siap untuk meningkatkan layanan pelanggan Anda?</h2>
          <p style={{
            fontSize: '16px',
            opacity: 0.9,
            lineHeight: '1.7',
            marginBottom: '32px'
          }}>
            Bergabunglah MyAspirasi untuk mengelola tiket dukungan pelanggan anda
          </p>
          <button style={{
            background: 'white',
            color: '#2563eb',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>Mulai gratis sekarang</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{
        background: '#1a1a1a',
        color: 'white',
        padding: '60px 2rem 32px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', marginBottom: '48px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '16px'
                }}>M</div>
                <span style={{ fontWeight: '600', fontSize: '18px' }}>MyAspirasi</span>
              </div>
              <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.7' }}>
                Platform ticketing system terpercaya untuk meningkatkan efisiensi layanan pelanggan
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', opacity: 0.9 }}>Produk</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Fitur</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Harga</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Dokumentasi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', opacity: 0.9 }}>Perusahaan</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Tentang kami</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Tim</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', opacity: 0.9 }}>Kontak</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', fontSize: '14px', opacity: 0.7 }}>support@myaspirasi.com</li>
                <li style={{ marginBottom: '12px', fontSize: '14px', opacity: 0.7 }}>+62 21 1234 5678</li>
              </ul>
            </div>
          </div>
          
          <div style={{
            borderTop: '0.5px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>© 2024 MyAspirasi. Semua hak dilindungi.</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Kebijakan privasi</a>
              <a href="#" style={{ fontSize: '14px', opacity: 0.7, textDecoration: 'none', color: 'white' }}>Syarat & ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
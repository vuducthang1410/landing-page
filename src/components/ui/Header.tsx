import React from "react";

interface HeaderProps {
  showHeader: boolean;
  scale: number;
  navItems: { id: string; label: string }[];
  logoHeader: string;
  onNavClick?: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ showHeader, scale, navItems, logoHeader, onNavClick }) => {
  const scaled = (value: number) => value * scale;
  return (
    <div
      className="bg-white"
      style={{
        position: "fixed",
        width: scaled(1920),
        height: scaled(140),
        top: 0,
        left: 0,
        transition: "transform 0.3s",
        transform: showHeader ? "translateY(0)" : `translateY(-${140 * scale}px)`,
        zIndex: 1000,
      }}
    >
      <div className="flex">
        <img
          className="object-cover"
          alt="Logo"
          src={logoHeader}
          style={{
            width: scaled(438),
            height: scaled(99),
            marginTop: scaled(27),
            marginLeft: scaled(143),
            marginBottom: scaled(14),
          }}
        />
        <div
          style={{
            flex: 1,
            height: scaled(140),
            marginRight: scaled(100),
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: scaled(64),
              marginLeft: scaled(210),
              marginBottom: scaled(52),
            }}
          >
            <div className="flex flex-row justify-between">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    height: scaled(24),
                    color: "#333333",
                    fontSize: scaled(20),
                    whiteSpace: "nowrap",
                    background: "none",
                    border: "none",
                    outline: "none",
                    padding: 0,
                    margin: 0,
                    textAlign: "center",
                    lineHeight: "100%",
                    verticalAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (onNavClick) {
                      onNavClick(item.id);
                    } else {
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 
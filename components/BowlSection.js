"use client";

export default function BowlSection({ visibleLayers, yesCount, total, statusMessage }) {
  const hasAny = yesCount > 0;
  const lc = (id) => `ingredient-group ${visibleLayers.has(id) ? "visible" : ""}`;

  return (
    <div className="bowl-section">
      <div className="bowl-svg-wrapper">
        <svg className="bowl-svg" viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bowlFloor" cx="50%" cy="38%" rx="50%" ry="55%">
              <stop offset="0%" stopColor="#EAEAEA"/><stop offset="55%" stopColor="#E0E0E0"/><stop offset="100%" stopColor="#D0D0D0"/>
            </radialGradient>
            <linearGradient id="rimGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8E8E8"/><stop offset="30%" stopColor="#F4F4F4"/><stop offset="70%" stopColor="#E0E0E0"/><stop offset="100%" stopColor="#C5C5C5"/>
            </linearGradient>
            <linearGradient id="outerWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D0D0D0"/><stop offset="30%" stopColor="#D8D8D8"/><stop offset="65%" stopColor="#C0C0C0"/><stop offset="100%" stopColor="#A5A5A5"/>
            </linearGradient>
            <radialGradient id="bowlShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000" stopOpacity="0.1"/><stop offset="80%" stopColor="#000" stopOpacity="0.03"/><stop offset="100%" stopColor="#000" stopOpacity="0"/>
            </radialGradient>
            <clipPath id="bowlClip"><ellipse cx="180" cy="195" rx="122" ry="65"/></clipPath>
          </defs>

          <ellipse cx="180" cy="310" rx="110" ry="16" fill="url(#bowlShadow)"/>
          <path d="M38 155 Q38 265 180 285 Q322 265 322 155" fill="url(#outerWall)" stroke="#B0B0B0" strokeWidth="0.5"/>
          <path d="M42 160 Q44 220 100 262" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round"/>
          <ellipse cx="180" cy="155" rx="144" ry="44" fill="#B8B8B8"/>
          <ellipse cx="180" cy="150" rx="144" ry="44" fill="url(#rimGrad)"/>
          <ellipse cx="180" cy="148" rx="140" ry="41" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
          <ellipse cx="180" cy="156" rx="134" ry="38" fill="#DADADA"/>
          <ellipse cx="180" cy="164" rx="131" ry="46" fill="#D6D6D6"/>
          <ellipse cx="180" cy="172" rx="128" ry="52" fill="#D3D3D3"/>
          <ellipse cx="180" cy="180" rx="126" ry="58" fill="#D0D0D0"/>
          <ellipse cx="180" cy="188" rx="124" ry="62" fill="#CDCDCD"/>
          <ellipse cx="180" cy="195" rx="122" ry="65" fill="url(#bowlFloor)"/>
          <ellipse cx="180" cy="185" rx="115" ry="55" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="8"/>
          <ellipse cx="180" cy="162" rx="132" ry="44" fill="none" stroke="rgba(0,0,0,0.025)" strokeWidth="0.8"/>
          <ellipse cx="180" cy="175" rx="127" ry="55" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="0.8"/>

          <g clipPath="url(#bowlClip)">
            <g className={lc("rice")}>
              <ellipse cx="180" cy="230" rx="118" ry="50" fill="#FFF5D6"/><ellipse cx="180" cy="223" rx="112" ry="47" fill="#FFF9E8"/><ellipse cx="180" cy="216" rx="106" ry="43" fill="#FFFDE7"/>
              <circle cx="150" cy="214" r="4" fill="#FFF8C4" opacity="0.4"/><circle cx="180" cy="218" r="3.5" fill="#FFF8C4" opacity="0.35"/><circle cx="210" cy="212" r="3" fill="#FFF8C4" opacity="0.4"/>
              <circle cx="165" cy="228" r="3" fill="#FFF8C4" opacity="0.3"/><circle cx="195" cy="226" r="2.5" fill="#FFF8C4" opacity="0.25"/><circle cx="135" cy="220" r="2.5" fill="#FFF8C4" opacity="0.3"/><circle cx="220" cy="218" r="2" fill="#FFF8C4" opacity="0.25"/>
            </g>
            <g className={lc("bomdong")}>
              <ellipse cx="110" cy="194" rx="46" ry="17" fill="#4CAF50" transform="rotate(-20 110 194)" opacity="0.9"/><ellipse cx="110" cy="194" rx="38" ry="11" fill="#66BB6A" transform="rotate(-20 110 194)"/>
              <ellipse cx="252" cy="190" rx="43" ry="16" fill="#4CAF50" transform="rotate(22 252 190)" opacity="0.9"/><ellipse cx="252" cy="190" rx="36" ry="10" fill="#66BB6A" transform="rotate(22 252 190)"/>
              <ellipse cx="158" cy="183" rx="41" ry="14" fill="#388E3C" transform="rotate(-8 158 183)" opacity="0.85"/><ellipse cx="158" cy="183" rx="34" ry="10" fill="#4CAF50" transform="rotate(-8 158 183)"/>
              <ellipse cx="210" cy="181" rx="38" ry="13" fill="#388E3C" transform="rotate(10 210 181)" opacity="0.85"/><ellipse cx="210" cy="181" rx="31" ry="8" fill="#4CAF50" transform="rotate(10 210 181)"/>
              <ellipse cx="137" cy="190" rx="31" ry="12" fill="#43A047" transform="rotate(-12 137 190)" opacity="0.8"/><ellipse cx="137" cy="190" rx="24" ry="7" fill="#66BB6A" transform="rotate(-12 137 190)"/>
              <ellipse cx="228" cy="186" rx="29" ry="11" fill="#43A047" transform="rotate(15 228 186)" opacity="0.8"/><ellipse cx="228" cy="186" rx="22" ry="7" fill="#66BB6A" transform="rotate(15 228 186)"/>
              <ellipse cx="180" cy="178" rx="36" ry="12" fill="#2E7D32" transform="rotate(3 180 178)" opacity="0.75"/><ellipse cx="180" cy="178" rx="29" ry="8" fill="#43A047" transform="rotate(3 180 178)"/>
              <ellipse cx="96" cy="200" rx="28" ry="10" fill="#388E3C" transform="rotate(-28 96 200)" opacity="0.7"/><ellipse cx="96" cy="200" rx="22" ry="6" fill="#66BB6A" transform="rotate(-28 96 200)"/>
              <ellipse cx="260" cy="196" rx="26" ry="9" fill="#388E3C" transform="rotate(28 260 196)" opacity="0.7"/><ellipse cx="260" cy="196" rx="20" ry="6" fill="#66BB6A" transform="rotate(28 260 196)"/>
              <line x1="95" y1="200" x2="128" y2="190" stroke="#A5D6A7" strokeWidth="2" opacity="0.5"/><line x1="236" y1="192" x2="268" y2="182" stroke="#A5D6A7" strokeWidth="2" opacity="0.5"/>
              <line x1="142" y1="194" x2="175" y2="178" stroke="#A5D6A7" strokeWidth="1.4" opacity="0.4"/><line x1="195" y1="186" x2="225" y2="178" stroke="#A5D6A7" strokeWidth="1.4" opacity="0.4"/>
            </g>
            <g className={lc("sauce")}>
              <path d="M92 182 Q125 170 155 175 Q180 166 205 173 Q232 167 262 175" stroke="#C62828" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.85"/>
              <path d="M102 189 Q140 179 170 183 Q195 176 222 181 Q242 175 268 181" stroke="#D32F2F" strokeWidth="8.5" fill="none" strokeLinecap="round" opacity="0.8"/>
              <path d="M115 175 Q145 170 165 177 Q185 168 210 175" stroke="#E53935" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7"/>
              <circle cx="130" cy="178" r="7.2" fill="#C62828" opacity="0.8"/><circle cx="168" cy="173" r="8.4" fill="#B71C1C" opacity="0.75"/><circle cx="212" cy="176" r="6.6" fill="#D32F2F" opacity="0.8"/>
              <circle cx="148" cy="182" r="5" fill="#E53935" opacity="0.7"/><circle cx="192" cy="180" r="5.4" fill="#C62828" opacity="0.7"/><circle cx="242" cy="178" r="6" fill="#D32F2F" opacity="0.75"/>
              <circle cx="110" cy="184" r="4.5" fill="#C62828" opacity="0.7"/><circle cx="225" cy="174" r="4" fill="#E53935" opacity="0.65"/>
            </g>
            <g className={lc("gochugaru")}>
              <rect x="118" y="172" width="4.2" height="3" rx="1" fill="#E53935" transform="rotate(15 118 172)" opacity="0.85"/><rect x="135" y="169" width="4.8" height="3" rx="1" fill="#D32F2F" transform="rotate(-10 135 169)" opacity="0.8"/>
              <rect x="152" y="167" width="3.6" height="2.4" rx="1" fill="#EF5350" transform="rotate(25 152 167)" opacity="0.85"/><rect x="168" y="170" width="4.2" height="3" rx="1" fill="#E53935" transform="rotate(-20 168 170)" opacity="0.8"/>
              <rect x="185" y="168" width="4.8" height="3" rx="1" fill="#C62828" transform="rotate(10 185 168)" opacity="0.85"/><rect x="202" y="171" width="3.6" height="2.4" rx="1" fill="#D32F2F" transform="rotate(-15 202 171)" opacity="0.8"/>
              <rect x="218" y="169" width="4.2" height="3" rx="1" fill="#E53935" transform="rotate(30 218 169)" opacity="0.85"/><rect x="235" y="172" width="3.8" height="2.8" rx="1" fill="#C62828" transform="rotate(5 235 172)" opacity="0.8"/>
              <rect x="108" y="176" width="3.5" height="2.5" rx="1" fill="#D32F2F" transform="rotate(-22 108 176)" opacity="0.75"/>
              <circle cx="128" cy="176" r="1.8" fill="#FF5722" opacity="0.7"/><circle cx="145" cy="173" r="1.4" fill="#E64A19" opacity="0.65"/><circle cx="160" cy="171" r="1.6" fill="#FF5722" opacity="0.7"/>
              <circle cx="175" cy="174" r="1.8" fill="#E64A19" opacity="0.65"/><circle cx="192" cy="172" r="1.4" fill="#FF5722" opacity="0.7"/><circle cx="210" cy="175" r="1.6" fill="#E64A19" opacity="0.65"/>
              <circle cx="225" cy="173" r="1.2" fill="#FF5722" opacity="0.6"/><circle cx="115" cy="178" r="1.2" fill="#E64A19" opacity="0.6"/><circle cx="240" cy="176" r="1.3" fill="#FF5722" opacity="0.6"/>
            </g>
            <g className={lc("oil")}>
              <ellipse cx="142" cy="176" rx="17" ry="7" fill="#E6A200" opacity="0.5"/><ellipse cx="185" cy="171" rx="19" ry="8.5" fill="#E6A200" opacity="0.48"/><ellipse cx="225" cy="176" rx="14" ry="6" fill="#E6A200" opacity="0.5"/>
              <ellipse cx="125" cy="182" rx="12" ry="5.5" fill="#D4960A" opacity="0.48"/><ellipse cx="163" cy="178" rx="14" ry="6" fill="#D4960A" opacity="0.43"/><ellipse cx="205" cy="180" rx="13" ry="5" fill="#E6A200" opacity="0.48"/>
              <ellipse cx="108" cy="186" rx="10" ry="4" fill="#D4960A" opacity="0.4"/><ellipse cx="148" cy="173" rx="7" ry="3.5" fill="#FFD54F" opacity="0.42"/><ellipse cx="192" cy="169" rx="8" ry="3.5" fill="#FFD54F" opacity="0.38"/>
              <ellipse cx="240" cy="178" rx="9" ry="4" fill="#E6A200" opacity="0.4"/>
              <circle cx="158" cy="172" r="3.6" fill="#C8930A" opacity="0.5"/><circle cx="176" cy="177" r="3" fill="#C8930A" opacity="0.48"/><circle cx="200" cy="173" r="3.4" fill="#C8930A" opacity="0.5"/>
              <circle cx="135" cy="179" r="2.4" fill="#C8930A" opacity="0.43"/><circle cx="218" cy="178" r="2.6" fill="#C8930A" opacity="0.48"/>
            </g>
            <g className={lc("anchovy")}>
              <path d="M122 174 Q150 169 175 172 Q198 167 225 171" stroke="#8B5E3C" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.58"/>
              <path d="M132 178 Q160 174 185 176 Q210 173 235 175" stroke="#7B4F2E" strokeWidth="3.6" fill="none" strokeLinecap="round" opacity="0.48"/>
              <path d="M145 181 Q170 178 192 180 Q212 177 230 179" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.38"/>
              <circle cx="148" cy="175" r="3" fill="#8B5E3C" opacity="0.52"/><circle cx="185" cy="173" r="3.6" fill="#7B4F2E" opacity="0.48"/><circle cx="215" cy="174" r="2.4" fill="#8B5E3C" opacity="0.52"/><circle cx="130" cy="177" r="2" fill="#7B4F2E" opacity="0.42"/>
            </g>
            <g className={lc("maesil")}>
              <path d="M132 172 Q160 167 185 170 Q210 165 230 169" stroke="#C5A23E" strokeWidth="4.2" fill="none" strokeLinecap="round" opacity="0.48"/>
              <path d="M148 176 Q172 172 195 174 Q215 170 235 173" stroke="#D4B44A" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.38"/>
              <ellipse cx="158" cy="174" rx="10" ry="3.5" fill="#D4B44A" opacity="0.38"/><ellipse cx="198" cy="172" rx="8.5" ry="3.5" fill="#D4B44A" opacity="0.33"/>
              <circle cx="175" cy="170" r="3" fill="#C5A23E" opacity="0.42"/><circle cx="210" cy="172" r="2.4" fill="#C5A23E" opacity="0.38"/><circle cx="140" cy="175" r="2" fill="#C5A23E" opacity="0.35"/>
            </g>
            <g className={lc("soy")}>
              <path d="M118 180 Q148 174 175 177 Q202 171 238 176" stroke="#3E2723" strokeWidth="4.2" fill="none" strokeLinecap="round" opacity="0.52"/>
              <path d="M128 176 Q158 171 180 173 Q208 168 228 173" stroke="#4E342E" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.43"/>
              <path d="M140 183 Q165 179 188 181 Q210 177 232 180" stroke="#3E2723" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.35"/>
              <circle cx="146" cy="178" r="3" fill="#3E2723" opacity="0.48"/><circle cx="185" cy="175" r="3.6" fill="#4E342E" opacity="0.43"/><circle cx="220" cy="176" r="2.4" fill="#3E2723" opacity="0.48"/><circle cx="162" cy="180" r="2" fill="#4E342E" opacity="0.38"/>
            </g>
            <g className={lc("egg")}>
              <ellipse cx="180" cy="174" rx="34" ry="26" fill="#FFFFFF" opacity="0.95"/><ellipse cx="178" cy="172" rx="29" ry="22" fill="#FFFDE7"/>
              <circle cx="180" cy="169" r="14.5" fill="#FFD54F"/><circle cx="180" cy="169" r="11" fill="#FFAB00"/>
              <circle cx="177" cy="166" r="4" fill="#FFE082" opacity="0.7"/><circle cx="174" cy="163" r="2.2" fill="#FFF8E1" opacity="0.8"/>
            </g>
            <g className={lc("sesame")}>
              <circle cx="132" cy="172" r="2.4" fill="#FDD835"/><circle cx="142" cy="165" r="2.2" fill="#FFEE58"/><circle cx="152" cy="161" r="2.6" fill="#FDD835"/><circle cx="162" cy="158" r="1.8" fill="#FFEE58"/>
              <circle cx="172" cy="160" r="2.4" fill="#FDD835"/><circle cx="182" cy="163" r="2.2" fill="#FFEE58"/><circle cx="192" cy="166" r="2.6" fill="#FDD835"/><circle cx="202" cy="169" r="1.8" fill="#FFEE58"/>
              <circle cx="212" cy="172" r="2.4" fill="#FDD835"/><circle cx="148" cy="174" r="1.8" fill="#FFEE58"/><circle cx="168" cy="165" r="1.6" fill="#FDD835"/><circle cx="188" cy="160" r="1.8" fill="#FFEE58"/>
              <circle cx="158" cy="168" r="2.2" fill="#FDD835"/><circle cx="178" cy="155" r="1.8" fill="#FFEE58"/><circle cx="198" cy="161" r="1.6" fill="#FDD835"/><circle cx="228" cy="174" r="1.8" fill="#FFEE58"/>
              <circle cx="125" cy="177" r="1.6" fill="#FDD835"/><circle cx="118" cy="180" r="1.5" fill="#FFEE58"/><circle cx="235" cy="176" r="1.5" fill="#FDD835"/><circle cx="145" cy="158" r="1.4" fill="#FFEE58"/><circle cx="205" cy="156" r="1.6" fill="#FDD835"/>
            </g>
          </g>

          <path d="M36 150 Q36 190 180 206 Q324 190 324 150 L324 155 Q324 195 180 211 Q36 195 36 155 Z" fill="url(#rimGrad)" stroke="#B5B5B5" strokeWidth="0.5"/>
          <path d="M36 150 Q36 190 180 206 Q324 190 324 150" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <path d="M36 155 Q36 195 180 211 Q324 195 324 155" fill="none" stroke="#A8A8A8" strokeWidth="1"/>
          <path d="M42 152 Q46 180 130 200" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
          <text x="180" y="196" textAnchor="middle" fontFamily="Gaegu, cursive" fontSize="14" fill="#bbb" style={{opacity: hasAny ? 0 : 1, transition: "opacity 0.3s"}}>텅 빈 양푼...</text>
        </svg>
      </div>
      <div className="bowl-progress"><span className="count">{yesCount}</span> / {total} 재료</div>
      <div className="bowl-status">{statusMessage}</div>
    </div>
  );
}

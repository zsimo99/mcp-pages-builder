import React from 'react';

export function getStyles(styleObj: any): React.CSSProperties {
  if (!styleObj) return {};

  const styles: React.CSSProperties = {};

  // 1. Spacing (space)
  if (styleObj.space) {
    const s = styleObj.space;
    if (s.mt !== undefined && s.mt !== null) styles.marginTop = `${s.mt}px`;
    if (s.mb !== undefined && s.mb !== null) styles.marginBottom = `${s.mb}px`;
    if (s.ml !== undefined && s.ml !== null) styles.marginLeft = `${s.ml}px`;
    if (s.mr !== undefined && s.mr !== null) styles.marginRight = `${s.mr}px`;
    
    if (s.pt !== undefined && s.pt !== null) styles.paddingTop = `${s.pt}px`;
    if (s.pb !== undefined && s.pb !== null) styles.paddingBottom = `${s.pb}px`;
    if (s.pl !== undefined && s.pl !== null) styles.paddingLeft = `${s.pl}px`;
    if (s.pr !== undefined && s.pr !== null) styles.paddingRight = `${s.pr}px`;
  }

  // 2. Size (size)
  if (styleObj.size) {
    const sz = styleObj.size;
    if (sz.width && sz.width.val !== undefined && sz.width.val !== null) {
      styles.width = `${sz.width.val}${sz.width.unit || 'px'}`;
    }
    if (sz.height && sz.height.val !== undefined && sz.height.val !== null) {
      styles.height = `${sz.height.val}${sz.height.unit || 'px'}`;
    }
  }

  // 3. Layout (layout)
  if (styleObj.layout) {
    const l = styleObj.layout;
    if (l.display) {
      styles.display = l.display;
    }
    if (l.display === 'flex') {
      if (l.fd) styles.flexDirection = l.fd;
      if (l.jc) styles.justifyContent = l.jc;
      if (l.ai) styles.alignItems = l.ai;
      if (l.cgap !== undefined && l.cgap !== null) styles.columnGap = `${l.cgap}px`;
      if (l.rgap !== undefined && l.rgap !== null) styles.rowGap = `${l.rgap}px`;
      if (l.wrap) styles.flexWrap = l.wrap;
    }
  }

  // 4. Position (pos)
  if (styleObj.pos) {
    const p = styleObj.pos;
    if (p.position && p.position !== 'static') {
      styles.position = p.position;
      if (p.top !== undefined && p.top !== null) styles.top = `${p.top}px`;
      if (p.bottom !== undefined && p.bottom !== null) styles.bottom = `${p.bottom}px`;
      if (p.left !== undefined && p.left !== null) styles.left = `${p.left}px`;
      if (p.right !== undefined && p.right !== null) styles.right = `${p.right}px`;
    }
    if (p['z-index'] !== undefined && p['z-index'] !== null) {
      styles.zIndex = p['z-index'];
    }
  }

  // 5. Typography (tp)
  if (styleObj.tp) {
    const t = styleObj.tp;
    if (t.textAlign) styles.textAlign = t.textAlign;
    if (t.fontWeight) styles.fontWeight = t.fontWeight;
    if (t.fontSize) styles.fontSize = t.fontSize;
    if (t.lineHeight) styles.lineHeight = t.lineHeight;
    if (t.color) styles.color = t.color;
    if (t.textTransform) styles.textTransform = t.textTransform;
  }

  // 6. Background (bg)
  if (styleObj.bg) {
    const b = styleObj.bg;
    if (b.bg) {
      styles.backgroundColor = b.bg;
    }
    if (b.bgImage) {
      const imageUrl = typeof b.bgImage === 'object' ? b.bgImage?.url : null;
      if (imageUrl) {
        styles.backgroundImage = `url(${imageUrl})`;
        if (b.bgSize) styles.backgroundSize = b.bgSize;
        if (b.bgPosition) styles.backgroundPosition = b.bgPosition;
        if (b.bgRepeat) styles.backgroundRepeat = b.bgRepeat;
      }
    }
  }

  return styles;
}

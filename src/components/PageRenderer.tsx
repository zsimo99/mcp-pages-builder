import React from 'react';
import { getStyles } from '@/lib/getStyles';

export function RenderBlock({ block }: { block: any }) {
  if (!block) return null;

  const style = getStyles(block.style);

  // Check if it's a container block (handles container_block_l1 up to container_block_l8)
  if (block.blockType && block.blockType.startsWith('container_block_l')) {
    const children = block.content?.children || [];
    const bgOverlay = block.style?.bg;

    return (
      <div 
        style={{
          position: style.position || 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        {/* Render overlay if background overlay is active */}
        {bgOverlay?.overlay && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: bgOverlay.overlayColor || 'rgba(0, 0, 0, 0.4)',
              opacity: bgOverlay.overlayOpacity !== undefined ? bgOverlay.overlayOpacity : 0.5,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        )}
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 1, 
            width: '100%', 
            height: '100%', 
            display: style.display || 'flex', 
            flexDirection: style.flexDirection || 'row', 
            justifyContent: style.justifyContent, 
            alignItems: style.alignItems, 
            flexWrap: style.flexWrap, 
            columnGap: style.columnGap, 
            rowGap: style.rowGap 
          }}
        >
          {children.map((child: any, idx: number) => (
            <RenderBlock key={child.id || idx} block={child} />
          ))}
        </div>
      </div>
    );
  }

  // Text Block
  if (block.blockType === 'text_block') {
    return (
      <div style={style}>
        {block.content?.text || ''}
      </div>
    );
  }

  // Image Block
  if (block.blockType === 'image_block') {
    const imageObj = block.content?.image;
    const imageUrl = typeof imageObj === 'object' ? imageObj?.url : null;
    const altText = block.content?.altText || imageObj?.alt || 'Image';

    if (!imageUrl) return null;

    return (
      <div style={{ position: style.position || 'relative', overflow: 'hidden', ...style }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageUrl} 
          alt={altText} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    );
  }

  return null;
}

export function RenderSection({ section }: { section: any }) {
  if (!section) return null;

  const style = getStyles(section.style);
  const widgets = section.content?.widgets || [];
  const bgOverlay = section.style?.bg;

  return (
    <section 
      style={{
        position: style.position || 'relative',
        overflow: 'hidden',
        width: '100%',
        ...style,
      }}
    >
      {/* Background Overlay */}
      {bgOverlay?.overlay && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: bgOverlay.overlayColor || 'rgba(0, 0, 0, 0.4)',
            opacity: bgOverlay.overlayOpacity !== undefined ? bgOverlay.overlayOpacity : 0.5,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%', 
          height: '100%',
          display: style.display || 'flex',
          flexDirection: style.flexDirection || 'row',
          justifyContent: style.justifyContent,
          alignItems: style.alignItems,
          flexWrap: style.flexWrap,
          columnGap: style.columnGap,
          rowGap: style.rowGap
        }}
      >
        {widgets.map((widget: any, idx: number) => (
          <RenderBlock key={widget.id || idx} block={widget} />
        ))}
      </div>
    </section>
  );
}

export default function PageRenderer({ page }: { page: any }) {
  if (!page) return null;

  const sections = page.Sections || [];

  return (
    <div className="custom-page-container" style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      {sections.map((section: any, idx: number) => (
        <RenderSection key={section.id || idx} section={section} />
      ))}
    </div>
  );
}

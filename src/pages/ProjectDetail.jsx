import { Link, Navigate, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import Media, { orientationClass } from '../components/Media'
import { caseStudies } from '../data/caseStudies'
import { projects } from '../data/projects'
import './ProjectDetail.css'

// Walk the project order and return the next one that actually has a
// detail page, so "NEXT PROJECT" never lands on an empty route.
const nextProjectOf = (slug) => {
  const start = projects.findIndex((project) => project.id === slug)
  if (start === -1) return null

  for (let step = 1; step < projects.length; step += 1) {
    const candidate = projects[(start + step) % projects.length]
    if (caseStudies[candidate.id]) return candidate
  }
  return null
}

const Frame = ({ src, ratio, alt }) => (
  <div className="case__frame" style={{ '--ratio': ratio }} data-reveal="image">
    <Media
      src={src}
      alt={alt}
      label={src.split('/').pop()}
      className={orientationClass(ratio)}
    />
  </div>
)

// An image is either a path, or { src, ratio } when it needs its own ratio
const toImage = (image, fallbackRatio) =>
  typeof image === 'string' ? { src: image, ratio: fallbackRatio } : { ratio: fallbackRatio, ...image }

const Block = ({ block, sectionTitle }) => {
  // Passed as custom properties, not as `gap` / `grid-template-columns`, so a
  // media query can still collapse the block to one column on small screens.
  const style = {}
  // A number is a uniform gap; a string passes through, e.g. '57px 36px'
  if (block.gap) style['--gap'] = typeof block.gap === 'number' ? `${block.gap}px` : block.gap
  if (block.columns) style['--columns'] = block.columns
  if (block.spaceBefore !== undefined) style['--space-before'] = `${block.spaceBefore}px`
  if (block.bleed) style['--bleed'] = `${block.bleed}px`

  const wide = block.wide ? ' is-wide' : ''

  // Main area on the left, a stack of images on the right.
  // `main` is one image, or an array laid out as its own nested grid.
  if (block.layout === 'split') {
    if (block.columns) style['--columns'] = block.columns
    if (block.stackGap) style['--stack-gap'] = `${block.stackGap}px`

    const mainImages = Array.isArray(block.main) ? block.main : [block.main]

    return (
      <div className={`case__grid case__grid--split${wide}`} style={style}>
        <div
          className="case__main"
          style={{
            '--main-columns': block.mainColumns ?? '1fr',
            '--main-gap': block.mainGap ?? '0px',
          }}
        >
          {mainImages.map((image, index) => {
            const { src, ratio } = toImage(image, block.ratio)
            return <Frame key={src} src={src} ratio={ratio} alt={`${sectionTitle} - ${index + 1}`} />
          })}
        </div>

        <div className="case__stack">
          {block.side.map((image, index) => {
            const { src, ratio } = toImage(image, block.sideRatio)
            return (
              <Frame
                key={src}
                src={src}
                ratio={ratio}
                alt={`${sectionTitle} - side ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`case__grid case__grid--${block.layout}${wide}`} style={style}>
      {block.images.map((image, index) => {
        const { src, ratio } = toImage(image, block.ratio)
        return <Frame key={src} src={src} ratio={ratio} alt={`${sectionTitle} - ${index + 1}`} />
      })}
    </div>
  )
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const study = caseStudies[slug]

  if (!study) return <Navigate to="/" replace />

  const next = nextProjectOf(slug)

  return (
    <article className="case">
      <div className="case__intro container">
        <h1 className="case__title" data-reveal="text">
          {study.title}
        </h1>
        <p
          className="case__summary"
          style={study.summaryWidth ? { '--summary-width': `${study.summaryWidth}px` } : undefined}
          data-reveal="text"
        >
          {study.summary}
        </p>
      </div>

      <div className="case__body container">
        {study.sections.map((section) => (
          <section key={section.id} className="case__section">
            <h2 className="case__section-title" data-reveal="text">
              {section.title}
            </h2>
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} sectionTitle={section.title} />
            ))}
          </section>
        ))}

        {study.instagram && (
          <section className="case__section case__instagram" data-reveal="text">
            <h2 className="case__section-title case__instagram-title">
              <a
                className="case__instagram-link"
                href={study.instagram.href}
                target="_blank"
                rel="noreferrer"
                data-tooltip="View"
              >
                <Icon name="instagram" size={22} strokeWidth={1.8} />
                {study.instagram.label}
              </a>
            </h2>
          </section>
        )}
      </div>

      <div className="case__actions">
        <Link className="btn btn--light" to="/">
          HOME
        </Link>
        {next && (
          <Link className="btn btn--dark" to={`/work/${next.id}`}>
            NEXT PROJECT
          </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectDetail

import React, { Component } from 'react'

class References extends Component {
  render() {
    return (
      <div>
        <h2 className="header-xl">
          References
        </h2>
        <ol className="reference-list">
          {this.props.references.map((ref, i) => {
            const key = ref.link && ref.link.length ? ref.link : ref.title
            return (
              <li key={key}>
                <span id={`fn-${i + 1}`}>{ref.title}</span>
                {ref.link ? (
                  <span>
                    :{' '}
                    <a
                      href="#references"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.link}
                    </a>
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default References

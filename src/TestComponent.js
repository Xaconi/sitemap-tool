import React, { Component } from 'react'

// Libs
import { xml2js } from 'xml-js';

export class TestComponent extends Component {

    constructor() {
        super()
        this.state = {
            xml : '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>http://www.domain.com /</loc><lastmod>2017-01-01</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url><url><loc>http://www.domain.com/catalog?item=vacation_hawaii</loc><changefreq>weekly</changefreq></url><url><loc>http://www.domain.com/catalog?item=vacation_new_zealand</loc><lastmod>2008-12-23</lastmod><changefreq>weekly</changefreq></url><url><loc>http://www.domain.com/catalog?item=vacation_newfoundland</loc><lastmod>2008-12-23T18:00:15+00:00</lastmod><priority>0.3</priority></url><url><loc>http://www.domain.com/catalog?item=vacation_usa</loc><lastmod>2008-11-23</lastmod></url></urlset>',
            jsObject : ''
        }
    }

    componentDidMount() {
        const jsObject = xml2js(this.state.xml, { compact: true, spaces: 4})
        this.setState({ jsObject })
        console.log(this.state.jsObject)
    }

    render() {
        return(
            <p>T'estimo...</p>         
        )
    }

}
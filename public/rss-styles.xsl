<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" />
  <xsl:template match="/rss">
    <html>
    <head>
      <title><xsl:value-of select="channel/title" /></title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
        }
        .header {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        .description {
          color: #7f8c8d;
          margin: 0;
        }
        .item {
          background: white;
          padding: 20px;
          margin-bottom: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .item h2 {
          margin: 0 0 10px 0;
          color: #2c3e50;
        }
        .item h2 a {
          color: #3498db;
          text-decoration: none;
        }
        .item h2 a:hover {
          text-decoration: underline;
        }
        .pubDate {
          color: #7f8c8d;
          font-size: 0.9em;
          margin-bottom: 10px;
        }
        .description {
          color: #555;
        }
        .info {
          background: #e8f4f8;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          border-left: 4px solid #3498db;
        }
      </style>
    </head>
    <body>
      <div class="info">
        <p><strong>This is an RSS feed.</strong> Subscribe by copying the URL from the address bar into your newsreader.</p>
      </div>
      
      <div class="header">
        <h1><xsl:value-of select="channel/title" /></h1>
        <p class="description"><xsl:value-of select="channel/description" /></p>
      </div>
      
      <xsl:for-each select="channel/item">
        <div class="item">
          <h2><a href="{link}" target="_blank"><xsl:value-of select="title" /></a></h2>
          <div class="pubDate"><xsl:value-of select="pubDate" /></div>
          <div class="description"><xsl:value-of select="description" /></div>
        </div>
      </xsl:for-each>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

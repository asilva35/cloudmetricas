import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Metaheader({
  title = 'Cloud Metricas',
  description = '',
  keywords = '',
  og_image = '/assets/images/og/og.jpg',
  author = 'Cloud Metricas',
  site_name = 'Cloud Metricas',
  url = 'https://cloudmetricas.com',
  domain = 'cloudmetricas.com',
  twitter_handle = '@cloudmetricas',
}) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <base href="" target="_self" />
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og_image} />
        <meta property="og:site_name" content={site_name} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:site" content={twitter_handle} />
        <meta name="twitter:creator" content={twitter_handle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={og_image} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/images/favicon/favicon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/images/favicon/favicon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/images/favicon/favicon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/images/favicon/favicon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/images/favicon/favicon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/images/favicon/favicon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/images/favicon/favicon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/images/favicon/favicon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/images/favicon/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/assets/images/favicon/favicon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <ToastContainer position="bottom-center" limit={1} />
    </>
  );
}

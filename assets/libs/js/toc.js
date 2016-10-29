<!DOCTYPE html>
<!-- saved from url=(0073)https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js -->
<html lang="en" class=" is-copy-enabled is-u2f-enabled"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    

    <link crossorigin="anonymous" href="./toc_files/frameworks-7a356da712cd13c4e4cfbdc04cf886bb391f84a7e92f9f7b3abf2b1034fea6e9.css" integrity="sha256-ejVtpxLNE8Tkz73ATPiGuzkfhKfpL597Or8rEDT+puk=" media="all" rel="stylesheet">
    <link crossorigin="anonymous" href="./toc_files/github-85c605289f6f5d0832a168f8ad71a38dff98eed69103be797a45c54c0cca6cac.css" integrity="sha256-hcYFKJ9vXQgyoWj4rXGjjf+Y7taRA755ekXFTAzKbKw=" media="all" rel="stylesheet">
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>jekyll-table-of-contents/toc.js at master · ghiculescu/jekyll-table-of-contents</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="https://github.com/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="https://github.com/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://github.com/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://github.com/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://github.com/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://github.com/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://github.com/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://github.com/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://github.com/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://github.com/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" name="twitter:image:src"><meta content="@github" name="twitter:site"><meta content="summary" name="twitter:card"><meta content="ghiculescu/jekyll-table-of-contents" name="twitter:title"><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." name="twitter:description">
      <meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" property="og:image"><meta content="GitHub" property="og:site_name"><meta content="object" property="og:type"><meta content="ghiculescu/jekyll-table-of-contents" property="og:title"><meta content="https://github.com/ghiculescu/jekyll-table-of-contents" property="og:url"><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." property="og:description">
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTAyNDc5MTI6OTlkNzg2ZTUxOTI0N2EyYjk3NWUyMDBhNTlkNjI5ZDc6OWY2YWUxYzhjNzA1NjgzMGJhNzhhNTBjODAzNDIxOGEyN2M4NzVlOTg2NmM1MWM1MTY4ZGI5ZjA1NGE2YmY2Mg==--19c1766866ce969c2dd43efaed81c862e05be013">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="https://github.com/sessions/sudo_modal">
    <meta name="request-id" content="5D06F52D:74D4:237BABB:58147E7C" data-pjax-transient="">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient="">

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host"><meta content="github" name="octolytics-app-id"><meta content="5D06F52D:74D4:237BABB:58147E7C" name="octolytics-dimension-request_id"><meta content="10247912" name="octolytics-actor-id"><meta content="achardes" name="octolytics-actor-login"><meta content="b5f552eb85aecb81b890553592ec45283dcf0c3bb372d033d90ab7c06e246846" name="octolytics-actor-hash">
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location">



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="achardes">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NzNlMWNkNjkzMzQ3ODYwYzc1OGMzNzRmMzEyYTQzOGFhNDkwOTMyYTA1MGNhNDIwZDJhYWYxNGYxMWE4YjdkYnx7InJlbW90ZV9hZGRyZXNzIjoiOTMuNi4yNDUuNDUiLCJyZXF1ZXN0X2lkIjoiNUQwNkY1MkQ6NzRENDoyMzdCQUJCOjU4MTQ3RTdDIiwidGltZXN0YW1wIjoxNDc3NzM4MTA5LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="1da1c95f8a555a3b38d6fa960ba28f8f32c9c068">
    <meta content="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" name="form-nonce">

    <meta http-equiv="x-pjax-version" content="4b864a2aef9c041070b982344e9bcc84">
    

      
  <meta name="description" content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites.">
  <meta name="go-import" content="github.com/ghiculescu/jekyll-table-of-contents git https://github.com/ghiculescu/jekyll-table-of-contents.git">

  <meta content="509837" name="octolytics-dimension-user_id"><meta content="ghiculescu" name="octolytics-dimension-user_login"><meta content="8119591" name="octolytics-dimension-repository_id"><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_nwo"><meta content="true" name="octolytics-dimension-repository_public"><meta content="false" name="octolytics-dimension-repository_is_fork"><meta content="8119591" name="octolytics-dimension-repository_network_root_id"><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_network_root_nwo">
  <link href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master.atom" rel="alternate" title="Recent Commits to jekyll-table-of-contents:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js" data-pjax-transient="">
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/search" class="js-site-search-form" data-scoped-search-url="/ghiculescu/jekyll-table-of-contents/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text" class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable" data-hotkey="s" name="q" placeholder="Search" aria-label="Search this repository" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="https://github.com/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="https://github.com/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="https://github.com/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:10247912" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="https://github.com/new" aria-label="Create new…" data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="https://github.com/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="https://github.com/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="https://github.com/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="ghiculescu/jekyll-table-of-contents">This repository</span>
  </div>
    <a class="dropdown-item" href="https://github.com/ghiculescu/jekyll-table-of-contents/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="https://github.com/achardes" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar">
      <img alt="@achardes" class="avatar" height="20" src="./toc_files/10247912" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">achardes</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="https://github.com/achardes" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="https://github.com/achardes?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="https://github.com/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="https://github.com/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com/" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="https://github.com/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/logout" class="logout-form" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="xLKp+QlyABVtmxeVzcKIRRxQo4r+OtXc52lceEaTl3bY19yeeiza0DIMvcQgzWNQaPnB2ugg+gNb6+DLf0KYvA=="></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container="">
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="JjcS7SV0/KWi1jFjtdoc+GlmZvHRnwXB/2JuTRycNQn3tZaMf+uzCOGSHLycIekHhYxeVusFBZ2emkkHJnRd4Q=="></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="8119591">

        <div class="select-menu js-menu-container js-select-menu">
          <a href="https://github.com/ghiculescu/jekyll-table-of-contents/subscription" class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true" data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="https://github.com/ghiculescu/jekyll-table-of-contents/watchers" aria-label="3 users are watching this repository">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included">
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed">
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore">
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/unstar" class="starred" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="qTnKV0VpLe0O+IphQ3A29o0W9Vuj3BU/sBLA/+X3xPPzNClMwcFehY5b8z26XkbhWh17Vc2g+xQMlPPQmmR9pw=="></div>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar ghiculescu/jekyll-table-of-contents" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="https://github.com/ghiculescu/jekyll-table-of-contents/stargazers" aria-label="106 users starred this repository">
          106
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/star" class="unstarred" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="Y69IxCq8EZXe7kEqw2Kiz+8OZHsoXIcY9HkSebOhvPmerNhESBy8BuuX6Kw5nxxIRlN9J20I9xJ9gzUMxI4UUQ=="></div>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Star this repository" title="Star ghiculescu/jekyll-table-of-contents" data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="https://github.com/ghiculescu/jekyll-table-of-contents/stargazers" aria-label="106 users starred this repository">
          106
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/fork" class="btn-with-count" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="AaxqOoiw1pkpbWUWI8gnDinLbs0c2VaAU7ulXvMMZfmW1fSQZHJhLtRtNOjp7go1YHM4YLMvNZDmAvJ3GzZt+A=="></div>
            <button type="submit" class="btn btn-sm btn-with-count" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account" aria-label="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents/network" class="social-count" aria-label="24 users are forked this repository">
      24
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="https://github.com/ghiculescu" class="url fn" rel="author">ghiculescu</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="https://github.com/ghiculescu/jekyll-table-of-contents" data-pjax="#js-repo-pjax-container">jekyll-table-of-contents</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax" itemscope="" itemtype="http://schema.org/BreadcrumbList" role="navigation" data-pjax="#js-repo-pjax-container">

  <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ghiculescu/jekyll-table-of-contents" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="https://github.com/ghiculescu/jekyll-table-of-contents/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ghiculescu/jekyll-table-of-contents/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope="" itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ghiculescu/jekyll-table-of-contents/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="https://github.com/ghiculescu/jekyll-table-of-contents/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ghiculescu/jekyll-table-of-contents/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /ghiculescu/jekyll-table-of-contents/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="https://github.com/ghiculescu/jekyll-table-of-contents/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ghiculescu/jekyll-table-of-contents/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="https://github.com/ghiculescu/jekyll-table-of-contents/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ghiculescu/jekyll-table-of-contents/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/2a2a432bd67804e0b2240de584752f3b1d34dc2e/toc.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:82714287186d7b70f3d6b3eba58fafda -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w" type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="" aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected" href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js" data-name="master" data-skip-pjax="true" rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="https://github.com/ghiculescu/jekyll-table-of-contents/find/master" class="js-pjax-capture-input btn btn-sm BtnGroup-item" data-pjax="" data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="https://github.com/ghiculescu/jekyll-table-of-contents"><span>jekyll-table-of-contents</span></a></span></span><span class="separator">/</span><strong class="final-path">toc.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="https://github.com/ghiculescu/jekyll-table-of-contents/commit/8be4badaf46ed91b916760e8e3c8a5cdffbbe7fb" data-pjax="">
          8be4bad
        </a>
        <relative-time datetime="2016-06-01T09:18:35Z" title="1 juin 2016 à 11:18 UTC+2">on 1 Jun</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" data-canonical-src="https://2.gravatar.com/avatar/eec05fba312341a522a34fe39a336ad1?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" height="20" src="./toc_files/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f65656330356662613331323334316135323261333466653339613333366164313f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636" width="20">
        <span class="user-mention">Tankery Chen</span>
          <a href="https://github.com/ghiculescu/jekyll-table-of-contents/commit/8be4badaf46ed91b916760e8e3c8a5cdffbbe7fb" class="message" data-pjax="true" title="Use innerText or textContent to filter out HTML blocks.

Headers has inner HTML block with id will be set to TOC, this may cause
multiple id in page.

eg:
&lt;h2&gt;&lt;a id=&quot;header-id&quot;&gt;&lt;/a&gt;Header&lt;/h2&gt;
&lt;h2&gt;&lt;a name=&quot;header-id&quot;&gt;&lt;/a&gt;Header&lt;/h2&gt;

Use innerText to filter out the anchor block, so the TOC can has pure
text inside.">Use innerText or textContent to filter out HTML blocks.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>8</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="heristop" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=heristop"><img alt="@heristop" class="avatar" height="20" src="./toc_files/206870" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ghiculescu" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=ghiculescu"><img alt="@ghiculescu" class="avatar" height="20" src="./toc_files/509837" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="antoine-richard" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=antoine-richard"><img alt="@antoine-richard" class="avatar" height="20" src="./toc_files/1552897" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="eksperimental" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=eksperimental"><img alt="@eksperimental" class="avatar" height="20" src="./toc_files/9133420" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nscyclone" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=nscyclone"><img alt="@nscyclone" class="avatar" height="20" src="./toc_files/5345029" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="drewcrawford" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=drewcrawford"><img alt="@drewcrawford" class="avatar" height="20" src="./toc_files/183400" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Anthodev" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=Anthodev"><img alt="@Anthodev" class="avatar" height="20" src="./toc_files/1784889" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Neway6655" href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=Neway6655"><img alt="@Neway6655" class="avatar" height="20" src="./toc_files/1468302" width="20"> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@heristop" height="24" src="./toc_files/206870(1)" width="24">
            <a href="https://github.com/heristop">heristop</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ghiculescu" height="24" src="./toc_files/509837(1)" width="24">
            <a href="https://github.com/ghiculescu">ghiculescu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@antoine-richard" height="24" src="./toc_files/1552897(1)" width="24">
            <a href="https://github.com/antoine-richard">antoine-richard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@eksperimental" height="24" src="./toc_files/9133420(1)" width="24">
            <a href="https://github.com/eksperimental">eksperimental</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nscyclone" height="24" src="./toc_files/5345029(1)" width="24">
            <a href="https://github.com/nscyclone">nscyclone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@drewcrawford" height="24" src="./toc_files/183400(1)" width="24">
            <a href="https://github.com/drewcrawford">drewcrawford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Anthodev" height="24" src="./toc_files/1784889(1)" width="24">
            <a href="https://github.com/Anthodev">Anthodev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Neway6655" height="24" src="./toc_files/1468302(1)" width="24">
            <a href="https://github.com/Neway6655">Neway6655</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="https://github.com/ghiculescu/jekyll-table-of-contents/raw/master/toc.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blame/master/toc.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master/toc.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw" href="https://windows.github.com/" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/edit/master/toc.js" class="inline-form js-update-url-with-hash" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="0mbodtNnlSDkg1Tc0c8GPjlmKptV/Hv8ctkFR2eYjiYOfrB0QFgR5R0INl76DmwsjCJzPzHDn/pFDt6Vau7E3Q=="></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with="">
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/delete/master/toc.js" class="inline-form" data-form-nonce="df83ead9c1ebf7aa7666bd8b37c9d45b1ddd650e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="ynieHtiVfX03/GvXwAwcjVAAYnxfKeODW99OI+KdLn5Hddgn8m2l34UPuxESNdCqtXx5ZIPsw/prUrs+Al+tsg=="></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit" aria-label="Fork this project and delete the file" data-disable-with="">
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      99 lines (90 sloc)
      <span class="file-info-divider"></span>
    3.67 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tbody><tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// https://github.com/ghiculescu/jekyll-table-of-contents</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">toc</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">      noBackToTopLinks<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">      title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>&lt;i&gt;Jump to...&lt;/i&gt;<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">      minimumHeaders<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      headers<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>h1, h2, h3, h4, h5, h6<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      listType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>ol<span class="pl-pds">'</span></span>, <span class="pl-c">// values: [ol|ul]</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      showEffect<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>show<span class="pl-pds">'</span></span>, <span class="pl-c">// values: [show|slideDown|fadeIn|none]</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      showSpeed<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>slow<span class="pl-pds">'</span></span>, <span class="pl-c">// set to 0 to deactivate effect</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">      classes<span class="pl-k">:</span> { list<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">                 item<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">               }</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    settings <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(defaults, options);</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">fixedEncodeURIComponent</span> (<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">encodeURIComponent</span>(str).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[!'()*]</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">'</span>%<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createLink</span> (<span class="pl-smi">header</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> innerText <span class="pl-k">=</span> (<span class="pl-smi">header</span>.<span class="pl-smi">textContent</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) <span class="pl-k">?</span> <span class="pl-smi">header</span>.<span class="pl-smi">innerText</span> <span class="pl-k">:</span> <span class="pl-smi">header</span>.<span class="pl-smi">textContent</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;a href='#<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-en">fixedEncodeURIComponent</span>(<span class="pl-smi">header</span>.<span class="pl-c1">id</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>'&gt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span> innerText <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;/a&gt;<span class="pl-pds">"</span></span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> headers <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">settings</span>.<span class="pl-c1">headers</span>).<span class="pl-en">filter</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// get all headers with an ID</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> previousSiblingName <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">prev</span>().<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span> );</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> previousSiblingName) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>, <span class="pl-smi">previousSiblingName</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">"</span>-<span class="pl-pds">"</span></span>) );</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    }), output <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">headers</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-smi">headers</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-smi">settings</span>.<span class="pl-smi">minimumHeaders</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">output</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">settings</span>.<span class="pl-smi">showEffect</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>none<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> render <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">show</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">show</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">slideDown</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">slideDown</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">fadeIn</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">fadeIn</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">none</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">html</span>(html); }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">get_level</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">ele</span>) { <span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">ele</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">"</span>H<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>), <span class="pl-c1">10</span>); };</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> highest_level <span class="pl-k">=</span> <span class="pl-smi">headers</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">ele</span>) { <span class="pl-k">return</span> <span class="pl-en">get_level</span>(ele); }).<span class="pl-c1">get</span>().<span class="pl-c1">sort</span>()[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> return_to_top <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>&lt;i class="icon-arrow-up back-to-top"&gt; &lt;/i&gt;<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> level <span class="pl-k">=</span> <span class="pl-en">get_level</span>(headers[<span class="pl-c1">0</span>]),</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      this_level,</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-smi">settings</span>.<span class="pl-c1">title</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span> &lt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span> class=<span class="pl-cce">\"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>.<span class="pl-smi">list</span> <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\"</span>&gt;<span class="pl-pds">"</span></span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">headers</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>click<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span>) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>clickable-header<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">header</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      this_level <span class="pl-k">=</span> <span class="pl-en">get_level</span>(header);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span> <span class="pl-k">&amp;&amp;</span> this_level <span class="pl-k">===</span> highest_level) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(header).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>top-level-header<span class="pl-pds">'</span></span>).<span class="pl-c1">after</span>(return_to_top);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (this_level <span class="pl-k">===</span> level) <span class="pl-c">// same level as before; same indenting</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;li class=<span class="pl-cce">\"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>.<span class="pl-smi">item</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\"</span>&gt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-en">createLink</span>(header);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&lt;=</span> level){ <span class="pl-c">// higher level than before; end parent ol</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&lt;</span> level; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;/li&gt;&lt;/<span class="pl-pds">"</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span>&gt;<span class="pl-pds">"</span></span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;li class=<span class="pl-cce">\"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>.<span class="pl-smi">item</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\"</span>&gt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-en">createLink</span>(header);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&gt;</span> level) { <span class="pl-c">// lower level than before; expand the previous to contain a ol</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&gt;</span> level; i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-smi">listType</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span> class=<span class="pl-cce">\"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>.<span class="pl-smi">list</span> <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\"</span>&gt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">"</span>&lt;li class=<span class="pl-cce">\"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>.<span class="pl-smi">item</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\"</span>&gt;<span class="pl-pds">"</span></span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-en">createLink</span>(header);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      level <span class="pl-k">=</span> this_level; <span class="pl-c">// update for the next one</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;/<span class="pl-pds">"</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span>&gt;<span class="pl-pds">"</span></span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span>) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>click<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>.back-to-top<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">scrollTop</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    render[<span class="pl-smi">settings</span>.<span class="pl-smi">showEffect</span>]();</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">})(jQuery);</td>
      </tr>
</tbody></table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" aria-label="Jump to line" autofocus="">
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com/" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com/" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>© 2016 <span title="0.12008s from github-fe-612ff0a.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com/" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-NbnFQdNBMJuTCxx5D6GyejDHxEzhDH+CQokOPYPIrb0=" src="./toc_files/frameworks-35b9c541d341309b930b1c790fa1b27a30c7c44ce10c7f8242890e3d83c8adbd.js.téléchargement"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ee7ezL8InaTNQ+i1KZ5Kwz0PoDyqQuk2ZJwj4bIYOrg=" src="./toc_files/github-79eedeccbf089da4cd43e8b5299e4ac33d0fa03caa42e936649c23e1b2183ab8.js.téléchargement"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="https://github.com/ghiculescu/jekyll-table-of-contents/blob/master/toc.js">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  


</body></html>
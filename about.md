---
title: About
permalink: /about/
layout: default
---
<body class="post has-featured-image">


  {% include loader.html %}
  {% include header.html %}

  <!-- MAIN CONTENT SECTION  _____________________________________________-->
	<section id="content" role="main">

		<div class="featured-image-header">
			<div id="">
				<img src="/img/photography/fullscreen01.jpg" alt="{{page.title}}" />
			</div>
		</div>

		<div class="wrapper">

      {% for entries in site.data.paragraphs.about %}
			<div class="column-grid column-grid-3">
				<div class="column column-span-1 column-push-0 column-first">			
					<h4><strong>{{entries.title}}</strong></h4>
				</div>
				<div class="column column-span-2 column-push-0 column-last">
          {% for paragraphs in entries.paragraphs %}
					<p>{{paragraphs.info}}</p>
          {% endfor %}
				</div>
			</div>
      <hr class="divider" />
      {% endfor %}

			<hr class="divider" />

			<hr class="divider" />

			<hr class="divider" />



			<!-- WYSIWYG ends here __-->
		</div><!-- END .wrapper -->

	</section>

  {% include footer.html %}

  {% include javascript.html %}

</body>

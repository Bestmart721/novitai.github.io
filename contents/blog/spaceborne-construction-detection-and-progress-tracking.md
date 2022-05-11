---
layout: investigations
title: "Spaceborne Construction Detection and Progress Tracking"
subtitle: "Even under cloud coverage with SAR imagery (radar)"
date: 2020-01-16 15:06:13 +0300
background: '/img/construction_detection_progress_tracking/isg-Sentinel_2016-01-09_09-03-cropped.jpg'
---

<style type="text/css">
.smalltext {
	font-size: 8px;
}
</style>

In this post we will talk about the potential use of near bi-weekly satellite imagery combined with AI for construction detection and tracking development progress and we'll present 2 examples of our observations.

<div class="embed-responsive embed-responsive-1by1">
    <video class="embed-responsive-item"  autoplay loop controls>
      <source src="{{ "img/construction_detection_progress_tracking/shale/optic/rgb-fast.mp4"  | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
    </video>
</div>
<div class="smalltext" style="text-align: right;">© European Commission, 2019</div>

**Construction Detection**

For various reasons detection of construction events from space is a needed commodity. Some of these reasons can be summarised as below.
- illegal construction detection
- oil rigs & shale site detection
- renewable/fossil fuel based energy plant detection

Using satellite imagery we now can derive factual data that analytics businesses can use. In below figures you can see the detection and in fact the build progress of a shale site using radar imagery. 

While observing note that radar and satellite acquisitions are done at different dates so even though there's good overlap of construction stages, the events (big changes in frame) do not necessarily overlap.  

<table class="table table-responsive">
    <tr>
        <td>
            <div class="embed-responsive-1by1">
                <video class="embed-responsive-item"  autoplay loop controls>
                  <source src="{{ "img/construction_detection_progress_tracking/shale/radar/output.mp4"  | relative_url }}" type="video/mp4">
                Your browser does not support the video tag.
                </video>
            </div>
        </td>
        <td>
            <div class="embed-responsive-1by1">
                <video class="embed-responsive-item"  autoplay loop controls>
                  <source src="{{ "img/construction_detection_progress_tracking/shale/optic/ucrop/output.mp4"  | relative_url }}" type="video/mp4">
                Your browser does not support the video tag.
                </video>
            </div>
        </td>
    </tr>
    <span class="smalltext" style="text-align: right;">© European Commission, 2019</span>
</table>

> Note that these radar images are post-processed with our own algorithms to maximise observability of events.

In the above sequences in both radar and optical imagery, certain construction events are clearly distinguishable. While this is only a small example and may not be so obvious for the untrained eye, an task-specific AI model can detect construction events at a massive scale.

**Progress Development**

Apart from scanning massive areas for detection events sometimes it's more important to focus on a single site and track its progress. For this we'll now look at Istanbul Sabiha Gokcen Airport (SAW) and observe its [expansion][0] from 2015 to 2019. Since there are too many images this sequence is sped up to 0.1 seconds per acquisition.

> Note that this video may take a while to load. Hover your mouse over the video to see controls

<div class="embed-responsive embed-responsive-1by1">
    <video class="embed-responsive-item" controls>
      <source src="{{ "img/construction_detection_progress_tracking/isg_expansion/optic/output.mp4"  | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
    </video>
</div>
<div class="smalltext" style="text-align: right;">© European Commission, 2019</div>

The slow but steady progress of the expansion can be seen just below the main airstrips. Thanks to the non-reflective (to radar) nature of asphalt, a similar expansion can also be observed in radar imagery which is presented below.

<div class="embed-responsive embed-responsive-1by1">
    <video class="embed-responsive-item" controls>
      <source src="{{ "img/construction_detection_progress_tracking/isg_expansion/radar/output.mp4"  | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
    </video>
</div>
<div class="smalltext" style="text-align: right;">© European Commission, 2019</div>

Notice the increasing darkness under the mainstrips which are also pitch black compared to other areas. This provide a means to track the development of a construction even if there's cloud coverage.

Our post processing algorithm combines SAR (synthetic aperture radar) images obtained via different polarisations to bring out the advantages of both acquisitions. This even allows us to even make a manual surface roughness/smoothness analysis or even help us estimate sea state.

>For a basic understanding of how SAR imagery works [radartutorial.eu][1] is an incredible source for basics.

For your needs of spaceborne detection and tracking needs and for more information, please reach out to us at [contact@novit.ai][9]

[0]: https://www.routesonline.com/airports/6063/istanbul-sabiha-gokcen-international-airport/news/279911/new-domestic-terminal-building-at-istanbul-sabiha-gokcen-international-airport-to-boost-passenger-capacity-to-41-million/
[1]: https://www.radartutorial.eu/20.airborne/ab07.en.html
[9]: mailto:contact@novit.ai

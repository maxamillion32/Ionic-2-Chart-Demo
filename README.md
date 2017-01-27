# Ionic-2-Chart-Demo
A demo app shows how to use ng2-chart in Ionic 2 application.

It's quite hard to make [ng2-chart](http://valor-software.com/ng2-charts/) work on Ionic 2. But when it's done I decided to share this project to you. 

## Walkthrough

### 1. Installation 

This part is same with the original setup. You have to run `npm install` within Ionic 2 project folder.

```
npm install ng2-charts --save
npm install chart.js --save
```

### 2. Refer to chart.js 

This is the time consuming part. There're several way to make the chart work on your app. 
Except you will meet `Embedding Chart.js in application is mandatory!`

The original method ask us to put following tag into `index.html`, but it isn't work and you found that 'mandatory' error.
```
<script src="node_modules/chart.js/src/chart.js"></script>
```
I thought it missed something. But to make it work, let use following line in `index.html` instead

```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.3/Chart.bundle.min.js"></script>
```

I found this make the chart appears. But it seems we have to let our application connect to internet to render the chart. 

I think the problem is about the orignal `<script>` guide cannot reach `chart.js` with some reason. I'll update after I found another solution, for now I hope it works for you! :D





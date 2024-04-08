---
title: Scripts automation on Linux

categories: [Knowledge, Toolkit]
tags: [tools, mid-level]

pin: false
blog: true

math: true
mermaid: true
---

A common issue in projects regarding data acquisition or frequently run scripts is the need to automate these processes. There area various methods to achieving this. The most common one is `crontab`. As an alternative, Windows users can utilize Windows Task Scheduler which is a desktop application for running specific executables  after a predefined trigger.

For example purposes, let's consider a bash script `my_scipt.sh` located in the user directory.

## `crontab`
`crontab` (short for "cron table"), is a time-based job scheduler in Unix-like operating systems. It allows users to schedule jobs (commands or scripts) to run periodically at fixed times, dates, or intervals.

### Creating a Cron Job
To schedule a task using `crontab`, begin by creating a file in a location of your choice, under any name you prefer. Now, you can add entries for each job you want to schedule. A crontab file entry looks like this:

```bash
* * * * * ~/my_script.sh
```

where each asterisk position corresponds to subsequentially:
- minutes
- hours
- days of the month
- months
- weekdays

The asterisk means "EVERY minute/hour/day/...". Instead, you can type a specific number (or numbers, separated by a comma) which indicate when the script is about to start. For example, to run the script at 5:34 PM, on the first and fifteenth day of each month, you need to enter:
```bash
34 17 1,15 * * ~/my_script.sh
```

Finally, to apply changes in the crontab file, run the following command in your terminal:
```bash
crontab /path/to/crontab/file
```

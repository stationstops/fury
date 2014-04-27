#!/usr/local/bin/perl -w

$|=1;

use strict;
use File::Slurp;
use Time::HiRes qw(usleep nanosleep);

my $filename = shift || die "Usage: $0 <filename> [wpm]";
my $wpm = shift || 400;
my $ms_per_min  =  60000000;
my $speed  =  int($ms_per_min / $wpm);
my $book = read_file('yellowking.txt');
my @words = split(/\s+/, $book);
my $wordcount = scalar @words;
my $completion_time = ($wordcount / $wpm) / 60;

print "Completion time: $completion_time hours\n";

sleep 5;

system $^O eq 'MSWin32' ? 'cls' : 'clear';

foreach(@words){
      print "$_                          \r";
      usleep $speed;
}

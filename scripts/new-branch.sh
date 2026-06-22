#!/usr/bin/env bash
# Create the next K13-style iteration branch: ego_<monDD>_v<N>
# Egg & Out shortcode is pinned to `ego` (the folder name "Egg-Out" would
# auto-derive to "egg-o", which is wrong). Override with $K13_PREFIX or arg 1.
set -e
prefix="${1:-${K13_PREFIX:-ego}}"
day=$(date +%b%d | tr '[:upper:]' '[:lower:]')          # e.g. jun22
base="${prefix}_${day}_v"
n=$(git branch --list "${base}*" | sed -E "s#.*${base}##" | sort -n | tail -1)
next=$(( ${n:-0} + 1 ))
git checkout -b "${base}${next}"
echo "→ on ${base}${next}"

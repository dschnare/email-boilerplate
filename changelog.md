# Change Log

# 0.2.0

*April 28, 2015*

- Add HTML pattern for lists and bulleted lists.
- Add HTML pattern for media objects.
- Change the padding on columns to be on the left instead of on the right (applies consistent padding in Outlook).


# 0.2.1

*April 30, 2015*

- Refactor the divider pattern to use bgcolor on a nested <td> element instead of `<hr>`.
- Explicitly set width on `<td>` elements so that Gmail on Android renders elements with proper widths (notably the divider).


# 0.2.2

*May 3, 2015*

- Create separate width styles for setting width.
- Rename existing mobile width styles to have prefix "m-width-".
- Rename existing mobile no padding styles to have prefix "m-no-padding-".
- Add additional helper styles for styling left and right padding.
- Add classes row-wrapper and col-wrapper to the wrapping <td> elements in rows and cols respectively.
- Update all patterns to use the new row-wrapper and col-wrapper classes.
- Add default topline for all row-wrapper classes.


# 0.2.3

*May 3, 2015*

- Rename change-log.md to changelog.md
- Add classes divider and divider-wrapper to divider pattern.
- Add clsses media-object-media, media-object-media-wrapper, media-object-content, media-object-content-wrapper to media object pattern.
- Add styles for media object images so that they are always 100% width.
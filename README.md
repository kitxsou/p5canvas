# p5canvas

The p5canvas extensions allows you to preview your p5js code in a canvas side by side with your code. The canvas refreshes live, while editing.

![Example Screenshot](images/example_01.png)
Image by Quynh Han Tran

There is a standard setup script included which setups a full width/height canvas that will be resized automatically. In one of the next versions this will become optional.

## Features

- Side Preview while editing the JavaScript file
- JSHint integration to find errors
- Loading images with relative path
- Saving the current canvas as PNG (as a command)
- Fully ES 6 compatible

## Usage

If a JavaScript file is open, a p5canvas button appears in the status bar bottom left. Click on it, to open the preview.

## Known Issues

There are currently no known issues. If you find any issues, please feel free, to message me on [Twitter](https://twitter.com/pixelkind) or [Github](https://github.com/pixelkind/p5canvas).

## Release Notes

### 1.4.1

- Bugfix for a problem with events

### 1.4.0

- Always reloads the full canvas
- Enable all log levels
- Some improvements for ES 6 usage
- Cleaned up codebase

### 1.3.0

- Making JavaScript ES 6 the default

For more Information, please look at the [Changelog](CHANGELOG.md).

## License

This Library is licensed under the MIT License. Please refer to the `LICENSE.txt` for more information.

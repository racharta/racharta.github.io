<!-- TypingText.vue -->

<template>
  <div class="text-start">
    <p class="typing-text">{{ typedText }}<span class="cursor" :class="{ 'blink': cursorVisible }"></span></p>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true,
    },
    typingSpeed: {
      type: Number,
      default: 100, // Adjust the typing speed as needed
    },
    wordDelay: {
      type: Number,
      default: 500, // Delay between words
    },
    deleteDelay: {
      type: Number,
      default: 1000, // Delay before deleting the text
    },
    loopDelay: {
      type: Number,
      default: 1000, // Delay between loops
    },
  },
  data() {
    return {
      currentIndex: 0,
      currentTextIndex: 0,
      typedText: "",
      cursorVisible: true,
    };
  },
  methods: {
    typeNextCharacter() {
      const currentText = this.texts[this.currentTextIndex];

      if (this.currentIndex < currentText.length) {
        this.typedText += currentText.charAt(this.currentIndex);
        this.currentIndex++;

        // Set a delay before typing the next character
        setTimeout(this.typeNextCharacter, this.typingSpeed);
      } else {
        // Set a delay before deleting the text
        setTimeout(this.deleteText, this.deleteDelay);
      }
    },
    deleteText() {
      if (this.currentIndex > 0) {
        this.typedText = this.typedText.slice(0, -1);
        this.currentIndex--;

        // Set a delay before deleting the next character
        setTimeout(this.deleteText, this.typingSpeed);
      } else {
        // Move to the next text in the array
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;

        // Reset for the next text
        this.currentIndex = 0;

        // Call the typing function again for the loop effect
        setTimeout(this.typeNextCharacter, this.loopDelay);
      }
    },
    toggleCursor() {
      this.cursorVisible = !this.cursorVisible;
      setTimeout(this.toggleCursor, 500); // Toggle cursor every 500ms
    },
  },
  mounted() {
    // Start the typing loop when the component is mounted
    this.typeNextCharacter();
    // Start toggling the cursor visibility
    this.toggleCursor();
  },
};
</script>

<style scoped>
.typing-text-container {
  text-align: start; /* Adjust the alignment as needed */
}

.typing-text {
  font-size: 1.5em; /* Adjust the font size as needed */
}

.cursor {
  display: inline-block;
  width: 0.15em; /* Adjust the cursor width as needed */
  height: 1em; /* Adjust the cursor height as needed */
  background-color: #fff; /* Adjust the cursor color as needed */
  opacity: 0.7;
  margin-left: 3px; /* Adjust the cursor position as needed */
}

@keyframes blink {
  0%, 50%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 0.7;
  }
}

.blink {
  animation: blink 1s infinite;
}
</style>

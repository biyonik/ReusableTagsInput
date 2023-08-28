export default {
  name: "TagsInput",
  data() {
    return {
        newTag: "",
        tags: [...this.selectedTags]
    }
  },
  props: {
    selectedTags: {
        type: Array,
        default: () => [],
        required: true
    }
  },
  emits: ['changeTags'],
  methods: {
    addNewTag: function () {
      if (!this.isInputEmpty && !this.isTagDuplicate) {
        this.tags.push(this.newTag);
        this.newTag = "";
        this.$emit("changeTags", this.tags);
      }
    },
    removeTag: function (index) {
      this.tags.splice(index, 1);
      this.$emit("changeTags", this.tags);
    },
    removeLastTag: function () {
      if (this.isInputEmpty) {
        this.tags.pop();
        this.$emit("changeTags", this.tags);
      }
    },
  },
  computed: {
    isInputEmpty: function () {
      return this.newTag.length === 0;
    },
    isTagDuplicate: function () {
      return this.tags.includes(this.newTag);
    },
  },
  watch: {
    newTag(newValue, oldValue) {
        if (newValue.indexOf(',') > -1) {
            this.newTag = this.newTag.slice(0, -1)
            this.addNewTag()
        }
    }
  },
};

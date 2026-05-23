import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["app/visualizer/**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Prevent DOM XSS regressions: never build visualizer UI using HTML parsing.
      // Allow only `element.innerHTML = ""` as a clearing operation.
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "AssignmentExpression[left.type='MemberExpression'][left.property.name='innerHTML'][operator='='][right.type='Literal'][right.value!='']",
          message:
            "Do not assign non-empty strings to `innerHTML` in visualizers. Use DOM APIs + `textContent`.",
        },
        {
          selector:
            "AssignmentExpression[left.type='MemberExpression'][left.property.name='innerHTML'][operator='='][right.type!='Literal']",
          message:
            "Do not assign dynamic values to `innerHTML` in visualizers. Use DOM APIs + `textContent`.",
        },
        {
          selector:
            "AssignmentExpression[left.type='MemberExpression'][left.property.name='innerHTML'][operator!='=']",
          message:
            "Do not mutate `innerHTML` (e.g. `+=`) in visualizers. Use DOM APIs + `textContent`.",
        },
      ],
    },
  },
];

export default eslintConfig;

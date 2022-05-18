const common = [
    '--require-module ts-node/register' // Load TypeScript module
  ];

  const blog_backend = [
    ...common,
    'tests/apps/blog/backend/features/**/*.feature',
    '--require tests/apps/blog/backend/features/step_definitions/*.steps.ts'
  ].join(' ');

  module.exports = {
    blog_backend
  };

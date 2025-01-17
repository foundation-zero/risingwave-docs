import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  MainSidebar: [
    {
      type: "category",
      label: "Get started",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "intro",
          label: "What is RisingWave?",
        },
        {
          type: "doc",
          id: "use-cases",
          label: "Use cases & examples",
        },
        {
          type: "doc",
          id: "rw-premium-edition-intro",
          label: "Premium edition",
        },
        {
          type: "doc",
          label: "Quick start",
          id: "get-started",
        },
        {
          "type": "category",
          "label": "Deploy in production",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "deploy/risingwave-cloud",
              "label": "Deploy on RisingWave Cloud"
            },
            {
              "type": "doc",
              "id": "deploy/risingwave-kubernetes",
              "label": "Deploy on Kubernetes with Operator"
            },
            {
              "type": "doc",
              "id": "deploy/risingwave-k8s-helm",
              "label": "Deploy on Kubernetes with Helm"
            }
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Manage data",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Ingest data",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "ingest/data-ingestion",
              label: "Overview",
            },
            {
              type: "category",
              label: "General features",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Formats and encoding",
                  id: "ingest/format-and-encode-parameters",
                },
                {
                  type: "doc",
                  label: "Supported sources and formats",
                  id: "ingest/supported-sources-and-formats",
                },
                {
                  type: "doc",
                  label: "Modify source or table schemas",
                  id: "ingest/modify-schemas",
                },
                {
                  type: "doc",
                  label: "Ingest additional source fields",
                  id: "ingest/include-clause",
                },
              ]
            },
            {
              type: "category",
              label: "Sources",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "Sources",
                description: "Guides on ingesting data from sources supported by RisingWave.",
                slug: "/sources",
                keywords: ["sources"],
              },
              items: [
                {
                  type: "category",
                  label: "Message queues",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Apache Kafka",
                      id: "ingest/ingest-from-kafka",
                    },
                    {
                      type: "doc",
                      label: "Apache Pulsar",
                      id: "ingest/ingest-from-pulsar",
                    },
                    {
                      type: "doc",
                      label: "AWS Kinesis",
                      id: "ingest/ingest-from-kinesis",
                    },
                    {
                      type: "doc",
                      label: "Google Pub/Sub",
                      id: "ingest/ingest-from-google-pubsub",
                    },
                    {
                      type: "doc",
                      label: "Redpanda",
                      id: "ingest/ingest-from-redpanda",
                    },
                    {
                      type: "doc",
                      label: "NATS JetStream",
                      id: "ingest/ingest-from-nats",
                    },
                    {
                      type: "doc",
                      label: "MQTT",
                      id: "ingest/ingest-from-mqtt",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Databases",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "CDC overview",
                      id: "ingest/ingest-from-cdc",
                    },
                    {
                      type: "doc",
                      label: "PostgreSQL CDC",
                      id: "guides/ingest-from-postgres-cdc",
                    },
                    {
                      type: "doc",
                      label: "MySQL CDC",
                      id: "guides/ingest-from-mysql-cdc",
                    },
                    {
                      type: "doc",
                      label: "SQL Server CDC",
                      id: "guides/ingest-from-sqlserver-cdc",
                    },
                    {
                      type: "doc",
                      label: "MongoDB CDC",
                      id: "guides/ingest-from-mongodb-cdc",
                    },
                    {
                      type: "doc",
                      label: "Citus CDC",
                      id: "guides/ingest-from-citus-cdc",
                    },
                  ],
                }, {
                  type: "category",
                  label: "Data lakes",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Apache Iceberg",
                      id: "ingest/ingest-from-iceberg",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Object storages",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "AWS S3",
                      id: "ingest/ingest-from-s3",
                    },
                    {
                      type: "doc",
                      label: "Azure Blob",
                      id: "guides/ingest-from-azure-blob",
                    },
                    {
                      type: "doc",
                      label: "Google Cloud Storage",
                      id: "ingest/ingest-from-gcs",
                    },
                  ],
                },
                {
                  type: "doc",
                  label: "Load generator",
                  id: "ingest/ingest-from-datagen",
                },
              ]
            },
            {
              type: "category",
              label: "Third-party SaaS platforms",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Kafka",
                  collapsible: false,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Confluent Cloud",
                      id: "guides/confluent-kafka-source",
                    },
                    {
                      type: "doc",
                      label: "Amazon MSK",
                      id: "guides/connector-amazon-msk",
                    },
                    {
                      type: "doc",
                      label: "AutoMQ Kafka",
                      id: "ingest/ingest-from-automq-kafka",
                    },
                    {
                      type: "doc",
                      label: "Instaclustr Kafka",
                      id: "ingest/ingest-from-instaclustr-kafka",
                    },
                    {
                      "type": "doc",
                      "label": "RedHat AMQ Streams",
                      "id": "ingest/ingest-from-redhat-amq-streams"
                    },
                    {
                      type: "doc",
                      label: "WarpStream",
                      id: "ingest/ingest-from-warpstream",
                    },
                  ]
                },
                {
                  type: "category",
                  label: "PostgreSQL CDC",
                  collapsible: false,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Neon CDC",
                      id: "guides/ingest-from-neon-cdc",
                    },
                    {
                      type: "doc",
                      label: "Supabase CDC",
                      id: "ingest/ingest-from-supabase-cdc",
                    },
                  ]
                },
                {
                  type: "category",
                  label: "MQTT",
                  collapsible: false,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Coreflux",
                      id: "ingest/ingest-from-coreflux-broker",
                    },
                  ]
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Process data",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "transform/transform-overview",
            },
            {
              type: "category",
              label: "SQL",
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: "doc",
                  id: "sql/syntax/sql-pattern-dynamic-filters",
                  label: "Dynamic filters",
                },
                {
                  type: "doc",
                  id: "sql/syntax/sql-pattern-temporal-filters",
                  label: "Temporal filters",
                },

                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-join-clause",
                  label: "Joins",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-time-window",
                  label: "Time windows",
                },
                {
                  type: "doc",
                  id: "sql/syntax/sql-pattern-topn",
                  label: "Top-N by group",
                },
              ]
            },
            {
              type: "doc",
              id: "transform/deletes-and-updates",
              label: "Deletes and updates",
            },
            {
              type: "doc",
              id: "transform/multiple-table-sink",
              label: "Maintain wide table with table sinks",
            },
            {
              type: "doc",
              id: "transform/watermarks",
              label: "Watermarks",
            },
            {
              type: "doc",
              id: "transform/emit-on-window-close",
              label: "Emit on window close",
            },
            {
              type: "doc",
              id: "transform/indexes",
              label: "Indexes",
            },
            {
              type: "doc",
              id: "transform/time-travel-queries",
              label: "Time travel queries",
            },
          ],
        },
        {
          type: "category",
          label: "Deliver data",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "data-delivery",
              label: "Overview",
            },
            {
              type: "doc",
              id: "guides/risingwave-as-postgres-fdw",
              label: "RisingWave as Postgres FDW",
            },
            {
              type: "doc",
              id: "transform/subscription",
              label: "Subscription",
            },
            {
              type: "category",
              label: "Sinks",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Message queues",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Apache Kafka",
                      id: "guides/create-sink-kafka",
                    },
                    {
                      type: "doc",
                      label: "Apache Pulsar",
                      id: "guides/sink-to-pulsar",
                    },
                    {
                      type: "doc",
                      label: "AWS Kinesis",
                      id: "guides/sink-to-aws-kinesis",
                    },
                    {
                      type: "doc",
                      label: "NATS and NATSJetStream",
                      id: "guides/sink-to-nats",
                    },
                    {
                      type: "doc",
                      label: "Google Pub/Sub",
                      id: "guides/sink-to-google-pubsub",
                    },
                    {
                      type: "doc",
                      label: "MQTT",
                      id: "guides/sink-to-mqtt",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Databases",
                  collapsible: true,
                  collapsed: false,
                  items: [{
                    type: "category",
                    label: "Operational data",
                    collapsible: false,
                    collapsed: false,
                    items: [
                      {
                        type: "doc",
                        label: "PostgreSQL",
                        id: "guides/sink-to-postgres",
                      },
                      {
                        type: "doc",
                        label: "MySQL",
                        id: "guides/sink-to-mysql-with-jdbc",
                      },
                      {
                        type: "doc",
                        label: "MongoDB",
                        id: "guides/sink-to-mongodb",
                      },
                      {
                        type: "doc",
                        label: "Amazon DynamoDB",
                        id: "guides/sink-to-dynamodb",
                      },
                      {
                        type: "doc",
                        label: "Microsoft SQL Server",
                        id: "guides/sink-to-sqlserver",
                      },
                      {
                        type: "doc",
                        label: "Redis",
                        id: "guides/sink-to-redis",
                      },
                      {
                        type: "doc",
                        label: "Supabase",
                        id: "guides/sink-to-supabase",
                      },
                      {
                        type: "doc",
                        label: "TiDB",
                        id: "guides/sink-to-tidb",
                      },
                      {
                        type: "doc",
                        label: "CockroachDB",
                        id: "guides/sink-to-cockroach",
                      },
                      {
                        type: "doc",
                        label: "Cassandra",
                        id: "guides/sink-to-cassandra",
                      },
                    ],
                  },
                  {
                    type: "category",
                    label: " Analytical data",
                    collapsible: false,
                    collapsed: false,
                    items: [
                      {
                        type: "doc",
                        label: "ClickHouse",
                        id: "guides/sink-to-clickhouse",
                      },
                      {
                        type: "doc",
                        label: "Apache Doris",
                        id: "guides/sink-to-doris",
                      },
                      {
                        type: "doc",
                        label: "StarRocks",
                        id: "guides/sink-to-starrocks",
                      },
                      {
                        type: "doc",
                        label: "Snowflake",
                        id: "guides/sink-to-snowflake",
                      },
                      {
                        type: "doc",
                        label: "Google BigQuery",
                        id: "guides/sink-to-bigquery",
                      },
                      {
                        type: "doc",
                        label: "Elasticsearch",
                        id: "guides/sink-to-elasticsearch",
                      },
                      {
                        type: "doc",
                        label: "OpenSearch",
                        id: "guides/sink-to-opensearch",
                      },],
                  },
                  ],
                }, {
                  type: "category",
                  label: "Data lakes",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "Apache Iceberg",
                      id: "guides/sink-to-iceberg",
                    },
                    {
                      type: "doc",
                      label: "Delta Lake",
                      id: "guides/sink-to-delta-lake",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Object storages",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      label: "AWS S3",
                      id: "guides/sink-to-aws-s3",
                    },
                    {
                      type: "doc",
                      label: "Azure Blob",
                      id: "guides/sink-to-azure-blob",
                    },
                    {
                      type: "doc",
                      label: "Google Cloud Storage",
                      id: "guides/sink-to-google-cloud-storage",
                    },
                    {
                      type: "doc",
                      label: "WebHDFS",
                      id: "guides/sink-to-webhdfs",
                    },
                  ],
                },
              ],
            },
          ],
        }]
    },
    {
      type: "category",
      label: "Develop & reference",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "concepts/key-concepts",
          label: "Glossary",
        },
        {
          type: "category",
          label: "Architecture",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/architecture",
              label: "Overview",
            },
            {
              type: "doc",
              label: "Fault tolerance",
              id: "reference/fault-tolerance",
            },
            {
              type: "doc",
              label: "Data persistence",
              id: "reference/data-persistence",
            },
          ]
        },
        {
          type: "category",
          label: "SQL references",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "SQL references",
            slug: "/sql-references",
            keywords: ["SQL"],
          },
          items: [
            {
              type: "category",
              label: "Commands",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "SQL commands",
                description: "Overview of the SQL commands supported by RisingWave.",
                slug: "/sql-commands",
                keywords: ["SQL, commands"],
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "sql/commands",
                },
              ],
            },
            {
              type: "category",
              label: "Query syntax",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "Query syntax",
                description: "Syntax and usage of common query clauses.",
                slug: "/query-syntax",
                keywords: ["query, syntax"],
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "sql/query-syntax",
                },
              ],
            },
            {
              type: "category",
              label: "Data types",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "sql/sql-data-types",
                  label: "Overview",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-casting",
                  label: "Casting",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-struct",
                  label: "Struct",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-array",
                  label: "Array",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-map",
                  label: "Map",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-jsonb",
                  label: "JSONB",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-rw_int256",
                  label: "rw_int256",
                },
                {
                  type: "doc",
                  id: "sql/data-types/protobuf-types",
                  label: "Supported protobuf types",
                },
              ],
            },
            {
              type: "category",
              label: "Functions and operators",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "SQL functions and operators",
                description: "Functions and operators that can be used in SQL queries.",
                slug: "/sql-functions",
                keywords: ["function, operator"],
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "sql/functions-operators",
                },
              ],
            },
            {
              type: "doc",
              id: "sql/sql-identifiers",
              label: "Identifiers",
            },
            {
              type: "category",
              label: "System catalogs",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "System catalogs",
                description: "System catalogs that can be used to query metadata.",
                slug: "/system-catalogs",
                keywords: ["catalog, system, metadata"],
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "sql/system-catalogs",
                },
              ],
            },
            {
              type: "doc",
              id: "sql/psql-commands",
            },
          ],
        },
        {
          type: "category",
          label: "User-defined functions",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "sql/udf/user-defined-functions",
              label: "Overview",
            },
            {
              type: "category",
              label: "External UDFs",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "sql/udf/udf-python",
                  label: "Python",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-java",
                  label: "Java",
                },
              ],
            },
            {
              type: "category",
              label: "Embedded UDFs",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "sql/udf/udf-python-embedded",
                  label: "Python",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-javascript",
                  label: "JavaScript",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-rust",
                  label: "Rust",
                }
              ],
            },
            {
              type: "doc",
              id: "sql/udf/sql-udfs",
              label: "SQL UDFs",
            },
          ],
        },
        {
          type: "category",
          label: "Integrations",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "rw-integration-summary",
            },
            {
              type: "doc",
              id: "transform/use-dbt",
              label: "Use dbt to manage pipelines",
            },
            {
              type: "category",
              label: "Client libraries",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "dev/client-libraries-overview",
              },
              items: [
                // {
                //   type: "doc",
                //   id: "dev/java-client-libraries",
                //   label: "Java",
                // },
                // {
                //   type: "doc",
                //   id: "dev/nodejs-client-libraries",
                //   label: "Node.js",
                // },
                // {
                //   type: "doc",
                //   id: "dev/python-client-libraries",
                //   label: "Python",
                // },
                // {
                //   type: "doc",
                //   id: "dev/go-client-libraries",
                //   label: "Go",
                // },
                // {
                //   type: "doc",
                //   id: "dev/ruby-client-libraries",
                //   label: "Ruby",
                // },
              ],
            },
            {
              type: "category",
              label: "Visualization tools",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "guides/visualize-overview",
                },
                {
                  type: "doc",
                  label: "Beekeeper Studio",
                  id: "guides/beekeeper-integration",
                },
                {
                  type: "doc",
                  label: "DBeaver",
                  id: "guides/dbeaver-integration",
                },
                {
                  type: "doc",
                  label: "Grafana",
                  id: "guides/grafana-integration",
                },
                {
                  type: "doc",
                  label: "Looker",
                  id: "guides/looker-integration",
                },
                {
                  type: "doc",
                  label: "Metabase",
                  id: "guides/metabase-integration",
                },
                {
                  type: "doc",
                  label: "Superset",
                  id: "guides/superset-integration",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deploy & operate",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "deploy/hardware-requirements",
          label: "Hardware requirements",
        },
        {
          "type": "doc",
          "id": "guides/install-psql-without-postgresql",
          "label": "Install psql"
        },
        {
          "type": "doc",
          "id": "deploy/risingwave-docker-compose",
          "label": "Deploy locally with Docker Compose"
        },
        {
          type: "doc",
          id: "deploy/upgrade-risingwave-k8s",
          label: "Upgrade RisingWave",
        },
        {
          type: "doc",
          id: "deploy/k8s-cluster-scaling",
          label: "Cluster scaling",
        },
        {
          type: "doc",
          id: "deploy/cluster-limit",
          label: "Cluster limit",
        },
        {
          type: "doc",
          id: "deploy/best-practices-for-managing-a-large-number-of-streaming-jobs",
          label: "Best practices for managing a large number of streaming jobs",
        },
        {
          type: "doc",
          id: "deploy/uninstall-risingwave-k8s",
          label: "Uninstall RisingWave from a cluster",
        },
        {
          type: "doc",
          id: "manage/monitor-risingwave-cluster",
        },
        {
          type: "doc",
          id: "manage/access-control",
        },
        {
          type: "doc",
          id: "manage/view-statement-progress",
        },
        {
          type: 'doc',
          id: 'manage/alter-streaming',
        },
        {
          type: "doc",
          label: "Manage secrets",
          id: "deploy/manage-secrets",
        },
        {
          type: "doc",
          label: "Tune reserved memory and cache eviction policy",
          id: "deploy/tune-reserved-memory",
        },
        {
          type: "doc",
          id: "manage/view-configure-system-parameters",
        },
        {
          type: 'doc',
          id: 'manage/view-configure-runtime-parameters',
        },
        {
          type: 'doc',
          id: 'manage/node-specific-configurations',
        },
        {
          type: "doc",
          id: "manage/dedicated-compute-node",
          label: "Set up a dedicated compute node",
        },
        {
          type: 'doc',
          id: 'manage/meta-backup',
        },
        {
          type: 'doc',
          id: 'manage/migrate-to-sql-backend',
          label: "Migrate to SQL backend",
        },
        {
          type: "doc",
          id: "manage/secure-connections-with-ssl-tls",
          label: "Secure connections with SSL/TLS",
        },
        {
          type: "doc",
          label: "Telemetry",
          id: "telemetry",
        },
      ]
    },
    {
      type: "category",
      label: "Optimize performance",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "performance/performance-faq"
        },
        {
          type: "doc",
          id: "performance/performance-metrics"
        },
        {
          type: "doc",
          label: "Best practices",
          id: "performance/performance-best-practices"
        },
      ]
    },
    {
      type: "category",
      label: "Demos",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "tutorials/tutorials-overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "tutorials/real-time-ad-performance-analysis",
          label: "Real-time ad performance analysis",
        },
        {
          type: "doc",
          id: "tutorials/server-performance-anomaly-detection",
          label: "Server performance anomaly detection",
        },
        {
          type: "doc",
          id: "tutorials/fast-twitter-events-processing",
          label: "Fast Twitter events processing",
        },
        {
          type: "doc",
          id: "tutorials/clickstream-analysis",
          label: "Clickstream analysis",
        },
        {
          type: "doc",
          id: "tutorials/live-stream-metrics-analysis",
          label: "Live stream metrics analysis",
        },
        {
          type: "doc",
          id: "tutorials/use-risingwave-to-monitor-risingwave-metrics",
          label: "Use RisingWave to monitor RisingWave metrics",
        },
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "troubleshoot/troubleshooting"
        },
        {
          type: "doc",
          label: "Out of memory",
          id: "troubleshoot/troubleshoot-oom"
        },
        {
          type: "category",
          label: "Performance issues",
          collapsible: true,
          collapsed: true,
          items:
            [
              {
                type: "doc",
                label: "High latency",
                id: "troubleshoot/troubleshoot-high-latency"
              },
              {
                type: "doc",
                label: "Streaming performance",
                id: "troubleshoot/troubleshoot-streaming-performance"
              },
            ]
        },
        {
          type: "category",
          label: "Node failure",
          collapsible: true,
          collapsed: true,
          items:
            [
              {
                type: "doc",
                label: "Overview",
                id: "troubleshoot/troubleshoot-node-failure"
              },
              {
                type: "doc",
                label: "Meta failure",
                id: "troubleshoot/troubleshoot-meta"
              },
            ]
        },

        {
          type: "doc",
          label: "Recovery failure",
          id: "troubleshoot/troubleshoot-recovery-failure"
        },
        {
          type: "doc",
          label: "Source & Sink",
          id: "troubleshoot/troubleshoot-source-sink"
        },
        {
          type: "doc",
          label: "Deployment issues",
          id: "troubleshoot/troubleshooting-deployment-issues"
        },
      ]
    },
    {
      type: "category",
      label: "FAQ",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "faq/faq-overview"
        },
        {
          type: "doc",
          id: "faq/faq-when-to-use-risingwave"
        },
        {
          type: "doc",
          label: "RisingWave vs. Flink",
          id: "faq/risingwave-flink-comparison",
        },
        {
          type: "doc",
          id: "faq/faq-using-risingwave"
        },
      ]
    },
    {
      type: "category",
      label: "Releases",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          href: "/release-notes",
          label: "Release notes",
        },
        {
          type: "link",
          href: "/product-lifecycle",
          label: "Product lifecycle",
        },
      ]
    },
  ],
};

export default sidebars;

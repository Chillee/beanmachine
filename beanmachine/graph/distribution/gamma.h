// Copyright 2004-present Facebook. All Rights Reserved.
#pragma once
#include "beanmachine/graph/distribution/distribution.h"

namespace beanmachine {
namespace distribution {

class Gamma: public Distribution {
 public:
  Gamma(
    graph::AtomicType sample_type,
    const std::vector<graph::Node*>& in_nodes);
  ~Gamma() override{}
  graph::AtomicValue sample(std::mt19937& gen) const override;
  double log_prob(const graph::AtomicValue& value) const override;
  void gradient_log_prob_value(
    const graph::AtomicValue& value, double& grad1, double& grad2) const override;
  void gradient_log_prob_param(
    const graph::AtomicValue& value, double& grad1, double& grad2) const override;
};

} // namespace distribution
} // namespace beanmachine